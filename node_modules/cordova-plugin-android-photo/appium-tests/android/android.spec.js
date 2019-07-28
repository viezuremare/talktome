/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

// these tests are meant to be executed by Cordova ParaMedic Appium runner
// you can find it here: https://github.com/apache/cordova-paramedic/
// it is not necessary to do a full CI setup to run these tests
// Run:
//      node cordova-paramedic/main.js --platform android --plugin cordova-plugin-android-photo --skipMainTests --target <emulator name>
// Please note only Android 5.1 and 4.4 are supported at this point.

/* global describe, it, fail, afterAll, pending, lastFailureReason */

'use strict';

var wdHelper = global.WD_HELPER;
var cameraHelper = require('../helpers/cameraHelper');

var MINUTE = 60 * 1000;
var BACK_BUTTON = 4;
var DEFAULT_WEBVIEW_CONTEXT = 'WEBVIEW';
var PROMISE_PREFIX = 'appium_camera_promise_';
var CONTEXT_NATIVE_APP = 'NATIVE_APP';

describe('Photo tests Android.', function () {
    var driver;
    // the name of webview context, it will be changed to match needed context if there are named ones:
    var webviewContext = DEFAULT_WEBVIEW_CONTEXT;
    // promise count to use in promise ID
    var promiseCount = 0;
    // determine if Appium session is created successfully
    var appiumSessionStarted = false;
    // determine if camera is present on the device/emulator
    var cameraAvailable = false;
    // a path to the image we add to the gallery before test run
    var fillerImagePath;
    var isAndroid7 = getIsAndroid7();

    function getIsAndroid7 () {
        if (global.USE_SAUCE) {
            return global.SAUCE_CAPS && (parseFloat(global.SAUCE_CAPS.platformVersion) >= 7);
        } else {
            // this is most likely null, meaning we cannot determine if it is Android 7 or not
            // paramedic needs to be modified to receive and pass the platform version when testing locally
            return global.PLATFORM_VERSION && (parseFloat(global.PLATFORM_VERSION) >= 7);
        }
    }

    function getNextPromiseId () {
        promiseCount += 1;
        return getCurrentPromiseId();
    }

    function getCurrentPromiseId () {
        return PROMISE_PREFIX + promiseCount;
    }

    // invokes Photo.takePicture() and goes through all UI interactions unless 'skipUiInteractions' is true
    function takePicture (skipUiInteractions) {
        var promiseId = getNextPromiseId();

        return driver
            .context(webviewContext)
            .execute(cameraHelper.takePicture, [promiseId])
            .context(CONTEXT_NATIVE_APP)
            .then(function () {
                if (skipUiInteractions) {
                    return;
                }
                // taking a picture from camera
                return driver
                    .waitForElementByAndroidUIAutomator('new UiSelector().resourceIdMatches(".*shutter.*")', MINUTE / 2)
                    .click()
                    .waitForElementByAndroidUIAutomator('new UiSelector().resourceIdMatches(".*done.*")', MINUTE / 2)
                    .click();
            })
            .fail(function (failure) {
                throw failure;
            });
    }

    // checks if the picture was successfully taken
    // if shouldLoad is falsy, ensures that the error callback was called
    function checkPicture (shouldLoad) {
        return driver
            .context(webviewContext)
            .setAsyncScriptTimeout(MINUTE / 2)
            .executeAsync(cameraHelper.checkPicture, [getCurrentPromiseId(), isAndroid7])
            .then(function (result) {
                if (shouldLoad) {
                    if (result !== 'OK') {
                        fail(result);
                    }
                } else if (result.indexOf('ERROR') === -1) {
                    throw 'Unexpected success callback with result: ' + result;
                }
            });
    }

    function getDriver () {
        driver = wdHelper.getDriver('Android');
        return driver.getWebviewContext()
            .then(function (context) {
                webviewContext = context;
                return driver.context(webviewContext);
            })
            .waitForDeviceReady()
            .injectLibraries()
            .then(function () {
                return driver
                    .then(function () { return takePicture(true); })
                    .context(CONTEXT_NATIVE_APP)
                    // case insensitive select, will be handy with Android 7 support
                    .elementByXPath('//android.widget.Button[translate(@text, "alow", "ALOW")="ALLOW"]')
                    .click()
                    .fail(function noAlert () { })
                    .deviceKeyEvent(BACK_BUTTON)
                    .sleep(2000)
                    .elementById('action_bar_title')
                    .then(function () {
                        // success means we're still in native app
                        return driver
                            .deviceKeyEvent(BACK_BUTTON);
                    }, function () {
                        // error means we're already in webview
                        return driver;
                    });
            })
            .then(function () {
                // doing it inside a function because otherwise
                // it would not hook up to the webviewContext var change
                // in the first methods of this chain
                return driver.context(webviewContext);
            })
            .deleteFillerImage(fillerImagePath)
            .then(function () {
                fillerImagePath = null;
            })
            .addFillerImage()
            .then(function (result) {
                if (result && result.indexOf('ERROR:') === 0) {
                    throw new Error(result);
                } else {
                    fillerImagePath = result;
                }
            });
    }

    function checkSession (done) {
        if (!appiumSessionStarted) {
            fail('Failed to start a session ' + (lastFailureReason || ''));
            done();
        }
    }

    function checkCamera (pending) {
        if (!cameraAvailable) {
            pending('Skipping because this test requires a functioning camera on the Android device/emulator, and this test suite\'s functional camera test failed on your target environment.');
        }
    }

    afterAll(function (done) {
        checkSession(done);
        driver
            .quit()
            .done(done);
    }, MINUTE);

    it('camera.ui.util configuring driver and starting a session', function (done) {
        // retry up to 3 times
        getDriver()
            .fail(function () {
                return getDriver()
                    .fail(function () {
                        return getDriver()
                            .fail(fail);
                    });
            })
            .then(function () {
                appiumSessionStarted = true;
            })
            .done(done);
    }, 30 * MINUTE);

    it('camera.ui take and check a picture', function (done) {
        checkSession(done);
        checkCamera(pending);

        return driver
            .then(function () {
                return takePicture();
            })
            .then(function () {
                return checkPicture(true);
            })
            .done(done);
    }, 5 * MINUTE);
});
