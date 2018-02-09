export const setHomeContentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ALERT_INFO':
      return Object.assign({}, action.alertInfo);
    default:
      return state;
  }
};