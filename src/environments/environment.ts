// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { FirebaseError } from "firebase/app";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBk0baEu-uJA03HHWoO62TWAT-KMKi22-Y",
    authDomain: "multiapis-9bac8.firebaseapp.com",
    databaseURL: "https://multiapis-9bac8-default-rtdb.firebaseio.com",
    projectId: "multiapis-9bac8",
    storageBucket: "multiapis-9bac8.firebasestorage.app",
    messagingSenderId: "784824859705",
    appId: "1:784824859705:web:124bd241d28f9b893f21e8"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
