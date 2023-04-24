// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   firebase: {
//     projectId: 'fendprueba',
//     appId: '1:172076762483:web:25b15212ad25cba186f106',
//     storageBucket: 'fendprueba.appspot.com',
//     locationId: 'southamerica-east1',
//     apiKey: 'AIzaSyDM7A8uw_wF5F_RE7V2HBQQp4nM_kQzfDk',
//     authDomain: 'fendprueba.firebaseapp.com',
//     messagingSenderId: '172076762483',
//   },
//   production: true,
//   URL: 'https://vc-proyectbackend.onrender.com',
// };

export const environment = {
  firebase: {
    projectId: 'fendprueba',
    appId: '1:172076762483:web:25b15212ad25cba186f106',
    storageBucket: 'fendprueba.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyDM7A8uw_wF5F_RE7V2HBQQp4nM_kQzfDk',
    authDomain: 'fendprueba.firebaseapp.com',
    messagingSenderId: '172076762483',
  },
  production: false,

  URL: 'http://localhost:8080/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
