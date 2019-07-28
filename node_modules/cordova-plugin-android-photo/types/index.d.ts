// Type definitions for Apache Cordova Camera plugin
// Project: https://github.com/shaunjohansen/cordova-plugin-android-photo
// Definitions by: Microsoft Open Technologies Inc <http://msopentech.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Copyright (c) Microsoft Open Technologies Inc
// Licensed under the MIT license.

interface Navigator {
    /**
     * This plugin provides an API for taking pictures.
     */
    camera: Camera;
}

/**
 * This plugin provides an API for taking pictures.
 */
interface Camera {
    /**
     * Takes a photo using the camera, or retrieves a photo from the device's image gallery.
     * @param cameraSuccess Success callback, that get the image
     * as a base64-encoded String, or as the URI for the image file.
     * @param cameraError Error callback, that get an error message.
     */
    takePicture(
        cameraSuccess: (data: string) => void,
        cameraError: (message: string) => void): void;
}
