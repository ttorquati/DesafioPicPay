import { all } from 'redux-saga/effects';

import card from './card/sagas';
import payment from './payment/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  return yield all([card, payment, user]);
}
