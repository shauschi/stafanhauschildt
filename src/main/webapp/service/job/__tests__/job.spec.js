import {getJobList} from '../'

describe('job Service', () => {

  describe('getJobList', () => {
    const jobs = ['job1', 'job2']
    let apiCall

    beforeEach(() => {
      fetch.resetMocks()
      apiCall = fetch.mockResponse(JSON.stringify(jobs))
    })

    it('should extract response body', async () => {
      const result = await getJobList()

      expect(apiCall).toHaveBeenCalledWith('/stefanhauschildt/jobs')
      expect(result).toEqual(jobs)
    })

    it('should throw an error when fetching jobs fails', async () => {
      fetch.mockResponse('', {status: 404})

      try {
        await getJobList()
      } catch (err) {
        expect(err.message).toEqual('Response not ok')
      }
    })
  })
})
