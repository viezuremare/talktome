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

/* globals FileEntry, FileTransfer, FileUploadOptions, LocalFileSystem */
/* eslint-env jasmine */

exports.defineAutoTests = function () {
    describe('Camera (navigator.photo)', function () {
        it('should exist', function () {
            expect(navigator.photo).toBeDefined();
        });

        it('should contain a takePicture function', function () {
            expect(navigator.photo.takePicture).toBeDefined();
            expect(typeof navigator.photo.takePicture === 'function').toBe(true);
        });
    });
};

/******************************************************************************/
/******************************************************************************/
/******************************************************************************/

exports.defineManualTests = function (contentEl, createActionButton) {
    var pictureUrl = null;
    var fileObj = null;
    var fileEntry = null;
    var pageStartTime = +new Date();

    function log (value) {
        console.log(value);
        document.getElementById('camera_status').textContent += (new Date() - pageStartTime) / 1000 + ': ' + value + '\n';
    }

    function clearStatus () {
        document.getElementById('camera_status').innerHTML = '';
        document.getElementById('camera_image').src = 'about:blank';
        var canvas = document.getElementById('canvas');
        canvas.width = canvas.height = 1;
        pictureUrl = null;
        fileObj = null;
        fileEntry = null;
    }

    function setPicture (url, callback) {
        log('image URI: "' + url + '"');

        pictureUrl = url;
        var img = document.getElementById('camera_image');
        var startTime = new Date();
        img.src = url;
        img.onload = function () {
            log('Img size: ' + img.naturalWidth + 'x' + img.naturalHeight);
            log('Image tag load time: ' + (new Date() - startTime));
            if (callback) {
                callback();
            }
        };
    }

    function onTakePictureError (e) {
        log('Error getting picture: ' + e && (e.code || e));
    }

    function onTakePictureSuccess (data) {
        setPicture(data);
        var path = pictureUrl.replace(/^file:\/\/(localhost)?/, '').replace(/%20/g, ' ');
        fileEntry = new FileEntry('image_name.png', path);
    }

    function takePicture () {
        clearStatus();
        log('Getting picture');
        navigator.photo.takePicture(onTakePictureSuccess, onTakePictureError);
    }

    function uploadImage () {
        var ft = new FileTransfer();
        var options = new FileUploadOptions();
        options.fileKey = 'photo';
        options.fileName = 'test.jpg';
        options.mimeType = 'image/jpeg';
        ft.onprogress = function (progressEvent) {
            console.log('progress: ' + progressEvent.loaded + ' of ' + progressEvent.total);
        };
        var server = 'http://sheltered-retreat-43956.herokuapp.com';

        ft.upload(pictureUrl, server + '/upload', win, fail, options);
        function win (information_back) {
            log('upload complete');
        }
        function fail (message) {
            log('upload failed: ' + JSON.stringify(message));
        }
    }

    function logCallback (apiName, success) {
        return function () {
            log('Call to ' + apiName + (success ? ' success: ' : ' failed: ') + JSON.stringify([].slice.call(arguments)));
        };
    }

    /**
     * Select image from library using a NATIVE_URI destination type
     * This calls FileEntry.getMetadata, FileEntry.setMetadata, FileEntry.getParent, FileEntry.file, and FileReader.readAsDataURL.
     */
    function readFile () {
        function onFileReadAsDataURL (evt) {
            var img = document.getElementById('camera_image');
            img.style.visibility = 'visible';
            img.style.display = 'block';
            img.src = evt.target.result;
            log('FileReader.readAsDataURL success');
        }

        function onFileReceived (file) {
            log('Got file: ' + JSON.stringify(file));
            fileObj = file;
            /* eslint-disable no-undef */
            var reader = new FileReader();
            /* eslint-enable no-undef */
            reader.onload = function () {
                log('FileReader.readAsDataURL() - length = ' + reader.result.length);
            };
            reader.onerror = logCallback('FileReader.readAsDataURL', false);
            reader.onloadend = onFileReadAsDataURL;
            reader.readAsDataURL(file);
        }

        // Test out onFileReceived when the file object was set via a native <input> elements.
        if (fileObj) {
            onFileReceived(fileObj);
        } else {
            fileEntry.file(onFileReceived, logCallback('FileEntry.file', false));
        }
    }

    function getFileInfo () {
        // Test FileEntry API here.
        fileEntry.getMetadata(logCallback('FileEntry.getMetadata', true), logCallback('FileEntry.getMetadata', false));
        fileEntry.setMetadata(logCallback('FileEntry.setMetadata', true), logCallback('FileEntry.setMetadata', false), { 'com.apple.MobileBackup': 1 });
        fileEntry.getParent(logCallback('FileEntry.getParent', true), logCallback('FileEntry.getParent', false));
        fileEntry.getParent(logCallback('FileEntry.getParent', true), logCallback('FileEntry.getParent', false));
    }

    /**
     * Copy image from library using a NATIVE_URI destination type
     * This calls FileEntry.copyTo and FileEntry.moveTo.
     */
    function copyImage () {
        var onFileSystemReceived = function (fileSystem) {
            var destDirEntry = fileSystem.root;

            // Test FileEntry API here.
            fileEntry.copyTo(destDirEntry, 'copied_file.jpg', logCallback('FileEntry.copyTo', true), logCallback('FileEntry.copyTo', false));
            fileEntry.moveTo(destDirEntry, 'moved_file.jpg', logCallback('FileEntry.moveTo', true), logCallback('FileEntry.moveTo', false));
        };

        window.requestFileSystem(LocalFileSystem.TEMPORARY, 0, onFileSystemReceived, null);
    }

    function displayImageUsingCanvas () {
        var canvas = document.getElementById('canvas');
        var img = document.getElementById('camera_image');
        var w = img.width;
        var h = img.height;
        h = 100 / w * h;
        w = 100;
        canvas.width = w;
        canvas.height = h;
        var context = canvas.getContext('2d');
        context.drawImage(img, 0, 0, w, h);
    }

    function testInputTag (inputEl) {
        clearStatus();
        // iOS 6 likes to dead-lock in the onchange context if you
        // do any alerts or try to remote-debug.
        window.setTimeout(function () {
            testNativeFile2(inputEl);
        }, 0);
    }

    function testNativeFile2 (inputEl) {
        /* eslint-disable no-undef */
        if (!inputEl.value) {
            alert('No file selected.');
            return;
        }
        fileObj = inputEl.files[0];
        if (!fileObj) {
            alert('Got value but no file.');
            return;
        }
        /* eslint-enable no-undef */
        var URLApi = window.URL || window.webkitURL;
        if (URLApi) {
            var blobURL = URLApi.createObjectURL(fileObj);
            if (blobURL) {
                setPicture(blobURL, function () {
                    URLApi.revokeObjectURL(blobURL);
                });
            } else {
                log('URL.createObjectURL returned null');
            }
        } else {
            log('URL.createObjectURL() not supported.');
        }
    }

    /******************************************************************************/

    var info_div = '<h1>Camera</h1>' +
            '<div id="info">' +
            '<b>Status:</b> <div id="camera_status"></div>' +
            'img: <img width="100" id="camera_image">' +
            'canvas: <canvas id="canvas" width="1" height="1"></canvas>' +
            '</div>';
    var getpicture_div = '<div id="takepicture"></div>';
    var test_procedure = '<h4>Recommended Test Procedure</h4>' +
            '<br>Status box should update with image and info whenever an image is taken.' +
            '</p>';
    var actions_div = '<h2>Actions</h2>' +
            'For the following tests, ensure that an image is set in status box' +
            '</p><div id="metadata"></div>' +
            'Expected result: Get metadata about file selected.<br>Status box will show, along with the metadata, "Call to FileEntry.getMetadata success, Call to FileEntry.setMetadata success, Call to FileEntry.getParent success"' +
            '</p><div id="reader"></div>' +
            'Expected result: Read contents of file.<br>Status box will show "Got file: {some metadata}, FileReader.readAsDataURL() - length = someNumber"' +
            '</p><div id="copy"></div>' +
            'Expected result: Copy image to new location and move file to different location.<br>Status box will show "Call to FileEntry.copyTo success:{some metadata}, Call to FileEntry.moveTo success:{some metadata}"' +
            '</p><div id="upload"></div>' +
            'Expected result: Upload image to server.<br>Status box may print out progress. Once finished will show "upload complete"' +
            '</p><div id="draw_canvas"></div>' +
            'Expected result: Display image using canvas.<br>Image will be displayed in status box under "canvas:"';

    contentEl.innerHTML = info_div + getpicture_div + test_procedure + actions_div;

    var elements = document.getElementsByClassName('testInputTag');
    var listener = function (e) {
        testInputTag(e.target);
    };
    for (var i = 0; i < elements.length; ++i) {
        var item = elements[i];
        item.addEventListener('change', listener, false);
    }

    createActionButton('Get picture', function () {
        takePicture();
    }, 'takepicture');

    createActionButton('Clear Status', function () {
        clearStatus();
    }, 'takepicture');

    createActionButton('Get File Metadata', function () {
        getFileInfo();
    }, 'metadata');

    createActionButton('Read with FileReader', function () {
        readFile();
    }, 'reader');

    createActionButton('Copy Image', function () {
        copyImage();
    }, 'copy');

    createActionButton('Upload Image', function () {
        uploadImage();
    }, 'upload');

    createActionButton('Draw Using Canvas', function () {
        displayImageUsingCanvas();
    }, 'draw_canvas');
};
