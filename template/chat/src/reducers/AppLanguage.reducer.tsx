import { LANGUAGE, CURRENT_LANGUAGE_STRING } from './Types';

const INITIAL_STATE = {
    currentLanguage : null,
    currentLanguageString: null,
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case LANGUAGE:
            return {...state, currentLanguage: action.payload };
        case CURRENT_LANGUAGE_STRING:
            return {...state, currentLanguageString: action.payload };
        default:
            return state;
    }
};