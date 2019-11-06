import { combineReducers } from 'redux';

import card from './card/reducer';
import payment from './payment/reducer';
import user from './user/reducer';

export default combineReducers({
  card,
  payment,
  user,
});
