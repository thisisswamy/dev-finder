// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  apiEndPoints:{
    addJobPost:"http://localhost:8080/api/jobs/add-job-post",
    getAllPost:'http://localhost:8080/api/jobs/',
    updateJobPost:'http://localhost:8080/api/jobs/job-post/edit/',
    deleteJobPost:'http://localhost:8080/api/jobs/delete/',
    searchPost:'http://localhost:8080/api/jobs/role?search=developer'
  }
  // apiEndPoints:{
  //   addJobPost:"https://spring-find-dev-rest-apis.herokuapp.com/api/jobs/add-job-post",
  //   getAllPost:'https://spring-find-dev-rest-apis.herokuapp.com/api/jobs/',
  //   updateJobPost:'https://spring-find-dev-rest-apis.herokuapp.com/api/jobs/job-post/edit/',
  //   deleteJobPost:'https://spring-find-dev-rest-apis.herokuapp.com/api/jobs/delete/',
  //   searchPost:'https://spring-find-dev-rest-apis.herokuapp.com/api/jobs/role?search=developer'
  // }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
