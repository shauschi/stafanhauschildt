const baseURL = 'http://127.0.0.1:8080';

export const getJobList = () => {
  return fetch(`${baseURL}/jobs`)
    .then(response => {
      if (!response.ok)
        throw new Error('Response not ok');
      return response.json()
    });
};
