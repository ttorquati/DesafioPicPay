import produce from 'immer';

const INITIAL_STATE = {
  transaction: {},
  paymentRequest: {},
  loading: false,
};

export default function payment(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@payment/ADD_PAYMENT_REQUEST': {
        const { payload } = action;
        draft.loading = true;
        draft.paymentRequest = payload;
        break;
      }
      case '@payment/ADD_PAYMENT_SUCCESS': {
        const { payload } = action;
        draft.transaction = payload;
        draft.loading = false;
        break;
      }
      case '@payment/ADD_PAYMENT_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
