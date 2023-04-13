// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config:{
    apiKey: "505066707b5451e38b7d8d183da49f3a",
    apiUrlcurrent: "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=",
    apiUrlfuture: "https://api.openweathermap.org/data/2.5/forecast?&units=metric&q=",
  },
  host:"http://localhost:3000/produit"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
