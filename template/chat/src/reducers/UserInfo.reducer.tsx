import { USER_CHANGED } from "./Types";


const INITIAL_STATE = {
  user: null,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case USER_CHANGED:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};