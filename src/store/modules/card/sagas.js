import { all, takeLatest, put } from 'redux-saga/effects';
import history from '~/services/history';

import { addCardSuccess, selectCardSuccess } from './actions';

export function* addCard({ payload }) {
  yield put(addCardSuccess(payload));
  history.push('/payment');
}

export function* selectCard({ payload }) {
  yield put(selectCardSuccess(payload));
}

export function setCard({ payload }) {
  if (!payload) history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setCard),
  takeLatest('@card/ADD_CARD_REQUEST', addCard),
  takeLatest('@card/SELECT_CARD_REQUEST', selectCard),
]);
