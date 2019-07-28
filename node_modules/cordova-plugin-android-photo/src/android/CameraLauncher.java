/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
*/
package org.apache.cordova.photo;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.cordova.BuildHelper;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.LOG;
import org.apache.cordova.PermissionHelper;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.support.v4.content.FileProvider;
import android.content.pm.PackageManager;
import android.content.pm.PackageManager.NameNotFoundException;

/**
 * This class launches the camera view, allows the user to take a picture, closes the camera view,
 * and returns the captured image.
 */
public class CameraLauncher extends CordovaPlugin {
    public static final int PERMISSION_DENIED_ERROR = 20;
    public static final int TAKE_PIC_SEC = 0;

    private static final String LOG_TAG = "CameraLauncher";

    private static final String TIME_FORMAT = "yyyyMMdd_HHmmss";

    private CordovaUri imageUri;            // Uri of captured image

    public CallbackContext callbackContext;

    private String applicationId;

    /**
     * Executes the request and returns PluginResult.
     *
     * @param action            The action to execute.
     * @param args              JSONArry of arguments for the plugin.
     * @param callbackContext   The callback id used when calling back into JavaScript.
     * @return                  A PluginResult object with a status and message.
     */
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        this.callbackContext = callbackContext;
        //Adding an API to CoreAndroid to get the BuildConfigValue
        //This allows us to not make this a breaking change to embedding
        this.applicationId = (String) BuildHelper.getBuildConfigValue(cordova.getActivity(), "APPLICATION_ID");
        this.applicationId = preferences.getString("applicationId", this.applicationId);

        if (action.equals("takePicture")) {
            try {
                this.callTakePicture();
            }
            catch (IllegalArgumentException e)
            {
                callbackContext.error("Illegal Argument Exception");
                PluginResult r = new PluginResult(PluginResult.Status.ERROR);
                callbackContext.sendPluginResult(r);
                return true;
            }

            PluginResult r = new PluginResult(PluginResult.Status.NO_RESULT);
            r.setKeepCallback(true);
            callbackContext.sendPluginResult(r);

            return true;
        }
        return false;
    }

    /**
     * Take a picture with the camera.
     * When an image is captured or the camera view is cancelled, the result is returned
     * in CordovaActivity.onActivityResult, which forwards the result to this.onActivityResult.
     *
     * The image is returned as a URI that points to the file.
     * To display in an img tag:
     *      img.src=result;
     */
    public void callTakePicture() {
        boolean saveAlbumPermission = PermissionHelper.hasPermission(this, Manifest.permission.READ_EXTERNAL_STORAGE)
                && PermissionHelper.hasPermission(this, Manifest.permission.WRITE_EXTERNAL_STORAGE);
        boolean takePicturePermission = PermissionHelper.hasPermission(this, Manifest.permission.CAMERA);

        // CB-10120: The CAMERA permission does not need to be requested unless it is declared
        // in AndroidManifest.xml. This plugin does not declare it, but others may and so we must
        // check the package info to determine if the permission is present.

        if (!takePicturePermission) {
            takePicturePermission = true;
            try {
                PackageManager packageManager = this.cordova.getActivity().getPackageManager();
                String[] permissionsInPackage = packageManager.getPackageInfo(this.cordova.getActivity().getPackageName(), PackageManager.GET_PERMISSIONS).requestedPermissions;
                if (permissionsInPackage != null) {
                    for (String permission : permissionsInPackage) {
                        if (permission.equals(Manifest.permission.CAMERA)) {
                            takePicturePermission = false;
                            break;
                        }
                    }
                }
            } catch (NameNotFoundException e) {
                // We are requesting the info for our package, so this should
                // never be caught

                callbackContext.error("Unexpected Name Not Found Exception");
                PluginResult r = new PluginResult(PluginResult.Status.ERROR);
                callbackContext.sendPluginResult(r);
            }
        }

        if (takePicturePermission && saveAlbumPermission) {
            takePicture();
        } else if (saveAlbumPermission && !takePicturePermission) {
            PermissionHelper.requestPermission(this, TAKE_PIC_SEC, Manifest.permission.CAMERA);
        } else if (!saveAlbumPermission && takePicturePermission) {
            PermissionHelper.requestPermissions(this, TAKE_PIC_SEC,
                    new String[]{Manifest.permission.READ_EXTERNAL_STORAGE, Manifest.permission.WRITE_EXTERNAL_STORAGE});
        } else {
            PermissionHelper.requestPermissions(this, TAKE_PIC_SEC, new String[]{ Manifest.permission.CAMERA, Manifest.permission.READ_EXTERNAL_STORAGE, Manifest.permission.WRITE_EXTERNAL_STORAGE });
        }
    }

    public void takePicture()
    {
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);

        // Specify file so that large image is captured and returned
        File photo = new File(getPicturesPath());
        this.imageUri = new CordovaUri(FileProvider.getUriForFile(cordova.getActivity(),
                applicationId + ".provider",
                photo));
        intent.putExtra(android.provider.MediaStore.EXTRA_OUTPUT, imageUri.getCorrectUri());

        if (this.cordova != null) {
            // Let's check to make sure the camera is actually installed. (Legacy Nexus 7 code)
            PackageManager mPm = this.cordova.getActivity().getPackageManager();
            if(intent.resolveActivity(mPm) != null)
            {
                this.cordova.startActivityForResult((CordovaPlugin) this, intent, 0);
            }
            else
            {
                LOG.d(LOG_TAG, "Error: You don't have a default camera.  Your device may not be CTS complaint.");

                callbackContext.error("Error: You don't have a default camera.");
                PluginResult r = new PluginResult(PluginResult.Status.ERROR);
                callbackContext.sendPluginResult(r);
            }
        } else {
            callbackContext.error("this.cordova == null");
            PluginResult r = new PluginResult(PluginResult.Status.ERROR);
            callbackContext.sendPluginResult(r);
        }
    }

    private String getPicturesPath() {
        String timeStamp = new SimpleDateFormat(TIME_FORMAT).format(new Date());
        String imageFileName = "IMG_" + timeStamp + ".jpg";
        File storageDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES);
        storageDir.mkdirs();
        String galleryPath = storageDir.getAbsolutePath() + "/" + imageFileName;
        return galleryPath;
    }

    private void refreshGallery(Uri contentUri) {
        Intent mediaScanIntent = new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE);
        mediaScanIntent.setData(contentUri);
        this.cordova.getActivity().sendBroadcast(mediaScanIntent);
    }

    /**
     * Called when the camera view exits.
     *
     * @param requestCode The request code originally supplied to startActivityForResult(),
     *                    allowing you to identify who this result came from.
     * @param resultCode  The integer result code returned by the child activity through its setResult().
     * @param intent      An Intent, which can return result data to the caller (various data can be attached to Intent "extras").
     */
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
        if (resultCode == Activity.RESULT_OK) {
            this.callbackContext.success(this.imageUri.getFileUri().toString());

            refreshGallery(this.imageUri.getFileUri());
            System.gc();
        }
        else if (resultCode == Activity.RESULT_CANCELED) {
            this.failPicture("No Image Selected");
        }
        else {
            this.failPicture("Did not complete!");
        }
    }

    /**
     * Send error message to JavaScript.
     *
     * @param err message sent back to the JavaScript application
     */
    public void failPicture(String err) {
        this.callbackContext.error(err);
    }

    // overrides CordovaPlugin
    public void onRequestPermissionResult(int requestCode, String[] permissions,
                                          int[] grantResults) throws JSONException {
        for (int r : grantResults) {
            if (r == PackageManager.PERMISSION_DENIED) {
                this.callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, PERMISSION_DENIED_ERROR));
                return;
            }
        }
        takePicture();
    }

    /**
     * Taking or choosing a picture launches another Activity, so we need to implement the
     * save/restore APIs to handle the case where the CordovaActivity is killed by the OS
     * before we get the launched Activity's result.
     */
    public Bundle onSaveInstanceState() {
        Bundle state = new Bundle();

        if (this.imageUri != null) {
            state.putString("imageUri", this.imageUri.getFileUri().toString());
        }

        return state;
    }

    public void onRestoreStateForActivityResult(Bundle state, CallbackContext callbackContext) {
        if (state.containsKey("imageUri")) {
            //I have no idea what type of URI is being passed in
            this.imageUri = new CordovaUri(Uri.parse(state.getString("imageUri")));
        }

        this.callbackContext = callbackContext;
    }
}
