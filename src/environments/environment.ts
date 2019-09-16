// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverAPI:"http://localhost:3000/",
  firebaseConfig : { 
    apiKey: "AIzaSyDlT-RlV5tEK5fncm_X1L3JLhSEmcT7NCo",
    authDomain: "loja-angularyan.firebaseapp.com",
    databaseURL: "https://loja-angularyan.firebaseio.com",
    projectId: "loja-angularyan",
    storageBucket: "",
    messagingSenderId: "929381562273",
    appId: "1:929381562273:web:de73375706e7c885263de0"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
