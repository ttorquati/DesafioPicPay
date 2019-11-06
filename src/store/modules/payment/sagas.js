import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { fromUnixTime, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import history from '~/services/history';
import api from '~/services/api';

import { formatPrice } from '../../../util/format';

import { addPaymentSuccess, addPaymentFailure } from './actions';

export function* addPayment({ payload }) {
  const response = yield call(api.post, 'transaction', payload);

  const { success, value, timestamp } = response.data.transaction;

  if (!success) {
    toast.error('Falha na transação, verifique seus dados!');
    yield put(addPaymentFailure());
    return;
  }

  const transaction = {
    ...response.data.transaction,
    valueFormatted: formatPrice(value),
    timestampFormatted: format(
      fromUnixTime(timestamp, { locale: pt }),
      'dd/MM/yy H:mm'
    ),
  };

  yield put(addPaymentSuccess(transaction));
  history.push('/confirmation');
}

export default all([takeLatest('@payment/ADD_PAYMENT_REQUEST', addPayment)]);
