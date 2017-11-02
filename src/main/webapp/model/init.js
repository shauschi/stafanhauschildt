import {fetchJobList} from './job';

export default (dispatch) => {
  dispatch(fetchJobList());
}
