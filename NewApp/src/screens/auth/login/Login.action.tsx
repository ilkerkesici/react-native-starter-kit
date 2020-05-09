import { store } from "../../../store";
import { LOGIN_LOADING, USER_CHANGED } from "../../../reducers/Types";
import { APIHelper, saveUserInfo } from '../../../helpers';
import { Actions } from "react-native-router-flux";
import {  TOAST_ERROR, showCutomToast } from "../../../helpers/ToastHelper";

/**
 * Login process (call for each login)
 * @param username is username of user
 * @param password is password of user
 */
export const clickLoginButton = async (username: string, password: string) => {
    store.dispatch({ type: LOGIN_LOADING, payload: true });
    const lang = store.getState().AppLanguageResponse.currentLanguage;
    if (username.trim().length < 6 || password.trim().length < 6) { // If inputs are invalid
        store.dispatch({ type: LOGIN_LOADING, payload: false });
        showCutomToast({type: TOAST_ERROR, message: lang.LOGIN_SCREEN.INVALID_LOGIN});
        return false;
    }
    try{
        let response = await APIHelper.postRequest('/api/user/token', {password, username});
        if(response.status != 200 || !response.data.Status){ // If there is an error server side
            showCutomToast({type: TOAST_ERROR, message: response.data.Message});
            store.dispatch({ type: LOGIN_LOADING, payload: false });
            return;
        }
        let saved_data = response.data.Data
        saveUserInfo(saved_data);  // Save user info for session
        APIHelper.setAccessToken(saved_data.access_token); // Updaet api helper token
        store.dispatch({type: USER_CHANGED, payload: saved_data}); // Update user info from reducer
        Actions.home();
        store.dispatch({ type: LOGIN_LOADING, payload: false });
        return true;
    }catch(err){
        showCutomToast({type: TOAST_ERROR, message: lang.UTIL.UNEXPECTED_ERROR});
        return false;
    }
}

/**
 * Go to register screen
 */
export const clickSignUp = () => {
    Actions.register();
}

