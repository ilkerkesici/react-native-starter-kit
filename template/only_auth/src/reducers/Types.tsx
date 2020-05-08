/*
* Constant types for reducers and to use actions
*/

//Login action types
export const LOGIN_LOADING = 'login_loading';


// Register action types
export const REGISTER_LOADING = 'register_loading';

// Toast action types
export const TOAST_REF_CHANGED = 'toast_ref_changed';
export const TOAST_ON_PRESS_CHANGED = 'tosat_on_press_changed';
export const TOAST_ON_CLOSE_CHANGED = 'toast_on_close_changed';
export const TOAST_ON_CANCEL_CHANGED = 'toast_on_cancel_changed';
export const TOAST_SHOW_CANCEL_CHANGED = 'toast_show_cancel_changed';

// User info types
export const USER_CHANGED = 'user_changed';

//Users action types
export const USERS_LIST_CHANGED = 'users_list_changed';
export const USERS_LOADING = 'users_loading';

//Language action types
export const LANG_STATE_CHANGED = 'lang_state_changed';
export const LANG_LOADING = 'lang_loading';
export const SUPPORTED_LANGS_CHANGED = 'supported_langs_changed';
export const YANDEX_DATA_CHANGED = 'yandex_data_changed';
export const LAST_TRANSLATED_CHANGED = 'last_translated_changed';
export const LANG_MODAL_CHANGED = 'modal_changed';
export const LANG_MODAL_LOADING = 'lang_modal_loading';

//App Language Action Types
export const LANGUAGE = 'language_cahnged'; 
export const CURRENT_LANGUAGE_STRING = 'app_language_string_changed';

// Modal types
export enum EModalType{
    Source,
    Target
}