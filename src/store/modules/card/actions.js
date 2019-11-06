export function addCardRequest(card) {
  return {
    type: '@card/ADD_CARD_REQUEST',
    payload: card,
  };
}

export function addCardSuccess(card) {
  return {
    type: '@card/ADD_CARD_SUCCESS',
    payload: card,
  };
}

export function selectCardRequest(card) {
  return {
    type: '@card/SELECT_CARD_REQUEST',
    payload: card,
  };
}

export function selectCardSuccess(card) {
  return {
    type: '@card/SELECT_CARD_SUCCESS',
    payload: card,
  };
}
