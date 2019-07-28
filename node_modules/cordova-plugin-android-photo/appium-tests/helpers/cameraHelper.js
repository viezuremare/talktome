/* global Q, resolveLocalFileSystemURL, FileReader */
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

'use strict';

// calls takePicture() and saves the result in promise
// note that this function is executed in the context of tested app
// and not in the context of tests
module.exports.takePicture = function (pid) {
    if (navigator._appiumPromises[pid - 1]) {
        navigator._appiumPromises[pid - 1] = null;
    }
    navigator._appiumPromises[pid] = Q.defer();
    navigator.photo.takePicture(function (result) {
        navigator._appiumPromises[pid].resolve(result);
    }, function (err) {
        navigator._appiumPromises[pid].reject(err);
    });
};

// verifies taken picture when the promise is resolved,
// calls a callback with 'OK' if everything is good,
// calls a callback with 'ERROR: <error message>' if something is wrong
// note that this function is executed in the context of tested app
// and not in the context of tests
module.exports.checkPicture = function (pid, skipContentCheck, cb) {
    function errorCallback (msg) {
        if (msg.hasOwnProperty('message')) {
            msg = msg.message;
        }
        cb('ERROR: ' + msg);
    }

    // verifies the image we get from plugin
    function verifyResult (result) {
        if (!result || result.length === 0) {
            errorCallback('The result is empty.');
            return;
        }

        try {
            if (result.indexOf('file:') === 0 ||
                result.indexOf('content:') === 0 ||
                result.indexOf('assets-library:') === 0) {

                if (!window.resolveLocalFileSystemURL) {
                    errorCallback('Cannot read file. Please install cordova-plugin-file to fix this.');
                    return;
                }
                if (skipContentCheck) {
                    cb('OK');
                    return;
                }
                resolveLocalFileSystemURL(result, function (entry) {
                    displayFile(entry);
                }, function (err) {
                    errorCallback(err);
                });
            } else {
                displayImage(result);
            }
        } catch (e) {
            errorCallback(e);
        }
    }

    // reads the file, then displays the image
    function displayFile (entry) {
        function onFileReceived (file) {
            var reader = new FileReader();
            reader.onerror = function (e) {
                errorCallback(e);
            };
            reader.onloadend = function (evt) {
                displayImage(evt.target.result);
            };
            reader.readAsDataURL(file);
        }

        entry.file(onFileReceived, function (e) {
            errorCallback(e);
        });
    }

    function displayImage (image) {
        try {
            var imgEl = document.getElementById('camera_test_image');
            if (!imgEl) {
                imgEl = document.createElement('img');
                imgEl.id = 'camera_test_image';
                document.body.appendChild(imgEl);
            }
            var timedOut = false;
            var loadTimeout = setTimeout(function () {
                timedOut = true;
                imgEl.src = '';
                errorCallback('The image did not load: ' + image.substring(0, 150));
            }, 10000);
            var done = function (status) {
                if (!timedOut) {
                    clearTimeout(loadTimeout);
                    imgEl.src = '';
                    cb(status);
                }
            };
            imgEl.onload = function () {
                try {
                    done('OK');
                } catch (e) {
                    errorCallback(e);
                }
            };
            imgEl.src = image;
        } catch (e) {
            errorCallback(e);
        }
    }

    navigator._appiumPromises[pid].promise
        .then(function (result) {
            verifyResult(result);
        })
        .fail(function (e) {
            errorCallback(e);
        });
};
