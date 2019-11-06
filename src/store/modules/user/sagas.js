import { all, takeLatest, put } from 'redux-saga/effects';
import history from '~/services/history';

import { addUserInfoSuccess } from './actions';

export function* addUserInfo({ payload }) {
  yield put(addUserInfoSuccess(payload));
  history.push('/payment');
}

export function setUser({ payload }) {
  if (!payload) history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setUser),
  takeLatest('@user/ADD_USER_INFO_REQUEST', addUserInfo),
]);
