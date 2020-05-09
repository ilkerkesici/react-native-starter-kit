import {
    MESSAGES_CHANGED,
    MESSAGES_LOADING,
    MESSAGES_OFFSET_CHANGES,
    IS_END_CHANGED,
    FLATLIST_CHANGED,
    ALL_MESSAGES_CHANGED
} from "./Types";


const INITIAL_STATE = {
    messages: [],
    offset: 0,
    messages_loading: false,
    is_end: false,
    message_trigger: true,
    flatlist: null,
    all_messages: [],
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case MESSAGES_LOADING:
            return { ...state, messages_loading: action.payload };
        case MESSAGES_CHANGED:
            return { ...state, messages: action.payload };
        case MESSAGES_OFFSET_CHANGES:
            return { ...state, offset: action.payload };
        case IS_END_CHANGED:
            return { ...state, is_end: action.payload };
        case FLATLIST_CHANGED:
            return { ...state, flatlist: action.payload };
        case ALL_MESSAGES_CHANGED:
            return { ...state, all_messages: action.payload };

        default:
            return state;
    }
};