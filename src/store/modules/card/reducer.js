import produce from 'immer';

const INITIAL_STATE = {
  currentCard: {},
  cards: [],
};

export default function card(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@card/ADD_CARD_REQUEST': {
        break;
      }
      case '@card/ADD_CARD_SUCCESS': {
        const { payload } = action;
        draft.currentCard = payload;
        draft.cards.push(payload);
        break;
      }
      case '@card/SELECT_CARD_SUCCESS': {
        const { payload } = action;
        draft.currentCard = payload;
        break;
      }
      default:
    }
  });
}
