import { LOGIN_LOADING } from "./Types";


const INITIAL_STATE = {
  loading: false,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};