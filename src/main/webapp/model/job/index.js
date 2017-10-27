import {createActions, handleActions} from 'redux-actions';
import {getJobList} from '../../service/job';

const initialState = {
  list: [],
  pending: false,
  errorMessage: null
}

export const actions = createActions({
  JOB: {
    LOAD: {
      PENDING: undefined,
      SUCCESS: jobs => jobs,
      ERROR: error => error
    }
  }
})

export const fetchJobList = (filterOptions) => {
  return dispatch => {
    dispatch(actions.job.load.pending())
    return getJobList(filterOptions)
      .then(list => dispatch(actions.job.load.success(list)))
      .catch(error => dispatch(actions.job.load.error(error)))
  }
}

export default handleActions({
  [actions.job.load.pending]: (state, {payload}) => Object.assign(
    {}, state, {pending: true}
  ),
  [actions.job.load.success]: (state, {payload}) => Object.assign(
    {}, state, {list: payload, pending: false}
  ),
  [actions.job.load.error]: (state, {payload}) => Object.assign(
    {}, state, {pending: false, errorMessage: payload.message}
  ),
}, initialState)
