import { combineReducers } from 'redux';

import alert from './alert';
import auth from './auth';
import room from './room';
import notify from './notify';
import feedback from './feedback';
import bill from './bill';
import statistical from './statistical';
export default combineReducers({
  alert,
  auth,
  room,
  notify,
  feedback,
  bill,
  statistical,
});
