export function addUserInfoRequest(user) {
  return {
    type: '@user/ADD_USER_INFO_REQUEST',
    payload: user,
  };
}

export function addUserInfoSuccess(user) {
  return {
    type: '@user/ADD_USER_INFO_SUCCESS',
    payload: user,
  };
}
