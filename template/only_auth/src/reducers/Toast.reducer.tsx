import {
  TOAST_REF_CHANGED,
  TOAST_ON_CANCEL_CHANGED,
  TOAST_ON_CLOSE_CHANGED,
  TOAST_ON_PRESS_CHANGED,
  TOAST_SHOW_CANCEL_CHANGED
} from "./Types";


const INITIAL_STATE = {
  toast: null,
  onPress: () => null,
  onCancel: () => null,
  onClose: () => null,
  showCancel: false
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case TOAST_REF_CHANGED:
      return { ...state, toast: action.payload };
    case TOAST_SHOW_CANCEL_CHANGED:
      return { ...state, showCancel: action.payload };
    case TOAST_ON_PRESS_CHANGED:
      return { ...state, onPress: action.payload };
    case TOAST_ON_CANCEL_CHANGED:
      return { ...state, onCancel: action.payload };
    case TOAST_ON_CLOSE_CHANGED:
      return { ...state, onClose: action.payload };
    default:
      return state;
  }
};
