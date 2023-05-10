export const environment = {
  production: true,
  apiEndPoints:{
    addJobPost:"http://ec2-18-212-28-49.compute-1.amazonaws.com/api/jobs/add-job-post",
    getAllPost:'http://ec2-18-212-28-49.compute-1.amazonaws.com/api/jobs/',
    updateJobPost:'http://ec2-18-212-28-49.compute-1.amazonaws.com/api/jobs/job-post/edit/',
    deleteJobPost:'http://ec2-18-212-28-49.compute-1.amazonaws.com/api/jobs/delete/',
    searchPost:'http://ec2-18-212-28-49.compute-1.amazonaws.com/api/jobs/role?search=developer'
  }
};
