import { REGISTER_LOADING } from "./Types";


const INITIAL_STATE = {
  loading: false,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case REGISTER_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};