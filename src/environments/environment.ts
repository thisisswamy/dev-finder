// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  apiEndPoints:{
    addJobPost:"http://ec2-18-212-28-49.compute-1.amazonaws.com/api/jobs/add-job-post",
    getAllPost:'http://ec2-18-212-28-49.compute-1.amazonaws.com/api/jobs/',
    updateJobPost:'http://ec2-18-212-28-49.compute-1.amazonaws.com/api/jobs/job-post/edit/',
    deleteJobPost:'http://ec2-18-212-28-49.compute-1.amazonaws.com/api/jobs/delete/',
    searchPost:'http://ec2-18-212-28-49.compute-1.amazonaws.com/api/jobs/role?search=developer'
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
