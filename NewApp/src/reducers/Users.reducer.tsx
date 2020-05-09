import { USERS_LIST_CHANGED } from "./Types";


const INITIAL_STATE = {
  users: [],
  loading: false
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case USERS_LIST_CHANGED:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};