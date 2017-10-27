export const getJobList = (param) => {
  return new Promise((resolve, reject) => {
    if(param instanceof Error) {
      reject(param)
    } else {
      resolve(['job1', 'job2']);
    }
  })
}
