export function addPaymentRequest(paymentRequest) {
  return {
    type: '@payment/ADD_PAYMENT_REQUEST',
    payload: paymentRequest,
  };
}

export function addPaymentSuccess(payment) {
  return {
    type: '@payment/ADD_PAYMENT_SUCCESS',
    payload: payment,
  };
}

export function addPaymentFailure() {
  return {
    type: '@payment/ADD_PAYMENT_FAILURE',
  };
}
