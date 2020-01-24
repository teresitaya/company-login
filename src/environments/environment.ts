// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://cas-rest-dev.azurewebsites.net/api/v2/',
  firebaseConfig: {
    apiKey: "AIzaSyA9D0wqpfmRzla3SVpi_Rp2SICAreRSGnI",
    authDomain: "dev-by-alpha-1.firebaseapp.com",
    databaseURL: "https://dev-by-alpha-1.firebaseio.com",
    projectId: "dev-by-alpha-1",
    storageBucket: "dev-by-alpha-1.appspot.com",
    messagingSenderId: "111589951704"
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
