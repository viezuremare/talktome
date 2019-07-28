---
title: Android Photo
description: Take photos with the camera on Android.
---
<!---
# license: Licensed to the Apache Software Foundation (ASF) under one
#         or more contributor license agreements.  See the NOTICE file
#         distributed with this work for additional information
#         regarding copyright ownership.  The ASF licenses this file
#         to you under the Apache License, Version 2.0 (the
#         "License"); you may not use this file except in compliance
#         with the License.  You may obtain a copy of the License at
#
#           http://www.apache.org/licenses/LICENSE-2.0
#
#         Unless required by applicable law or agreed to in writing,
#         software distributed under the License is distributed on an
#         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#         KIND, either express or implied.  See the License for the
#         specific language governing permissions and limitations
#         under the License.
-->

|Travis CI|
|:-:|
|[![Build Status](https://travis-ci.org/shaunjohansen/cordova-plugin-android-photo.svg?branch=master)](https://travis-ci.org/shaunjohansen/cordova-plugin-android-photo)|

# cordova-plugin-android-photo

This plugin defines a global `navigator.photo` object, which provides an API for taking photos with the camera on Android.

Although the object is attached to the global scoped `navigator`, it is not available until after the `deviceready` event.

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.photo);
    }

## Supported Platforms

* Android

## Installation

    cordova plugin add cordova-plugin-android-photo

It is also possible to install via repo url directly (unstable)

    cordova plugin add https://github.com/shaunjohansen/cordova-plugin-android-photo.git

## How to Contribute

Contributors are welcome! You can report bugs, improve the documentation, or [contribute code](https://github.com/shaunjohansen/cordova-plugin-android-photo/pulls).

**And don't forget to test and document your code.**

---

<a name="reference"></a>

# API Reference

* [photo](#module_photo)
  * [.takePicture(successCallback, errorCallback)](#module_photo.takePicture)
  * [.errorCallback](#module_photo.errorCallback) : <code>function</code>
  * [.successCallback](#module_photo.successCallback) : <code>function</code>

---

<a name="module_photo"></a>

## camera

<a name="module_photo.takePicture"></a>

### photo.takePicture(successCallback, errorCallback)

Takes a photo using the camera.  The image is passed to the success callback as
the URI for the image file.

The `photo.takePicture` function opens the device's default camera
application which allows users to snap a photo.
Once the user snaps the photo, the camera application closes and the application is restored.

The image file location is sent to the [`successCallback`](#module_photo.successCallback) callback function.

**Kind**: static method of <code>[camera](#module_photo)</code>

| Param | Type |
| --- | --- |
| successCallback | <code>[successCallback](#module_photo.successCallback)</code> |
| errorCallback | <code>[errorCallback](#module_photo.errorCallback)</code> |

#### Example

```js
navigator.photo.takePicture(successCallback, errorCallback);
```

#### Android Quirks

Android uses intents to launch the camera activity on the device to capture
images, and on phones with low memory, the Cordova activity may be killed.  In this
scenario, the result from the plugin call will be delivered via the resume event.
See [the Android Lifecycle guide][android_lifecycle]
for more information. The `pendingResult.result` value will contain the value that
would be passed to the callbacks (either the URI/URL or an error message). Check
the `pendingResult.pluginStatus` to determine whether or not the call was
successful.

[android_lifecycle]: http://cordova.apache.org/docs/en/dev/guide/platforms/android/lifecycle.html

<a name="module_photo.errorCallback"></a>

### camera.errorCallback : <code>function</code>

Callback function that provides an error message.

**Kind**: static typedef of <code>[camera](#module_photo)</code>

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | The message is provided by the device's native code. |

<a name="module_photo.successCallback"></a>

### camera.successCallback : <code>function</code>

Callback function that provides the image uri.

**Kind**: static typedef of <code>[camera](#module_photo)</code>

| Param | Type | Description |
| --- | --- | --- |
| imageUri | <code>string</code> | The image file URI. |

#### Example

```js
// Show image
//
function cameraCallback(imageUri) {
   var image = document.getElementById('myImage');
   image.src = imageUri;
}
```

---

# Big Thanks

* Cross-browser testing platform and open source <3 provided by [Sauce Labs][saucelabs_homepage]

[saucelabs_homepage]: https://saucelabs.com
