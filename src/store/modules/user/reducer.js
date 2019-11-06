import produce from 'immer';

const INITIAL_STATE = {};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/ADD_USER_INFO_REQUEST': {
        break;
      }
      case '@user/ADD_USER_INFO_SUCCESS': {
        const { id, img, name, username } = action.payload;

        draft.id = id;
        draft.img = img;
        draft.name = name;
        draft.username = username;

        break;
      }
      default:
    }
  });
}
