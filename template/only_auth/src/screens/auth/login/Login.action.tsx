import { store } from "../../../store";
import { LOGIN_LOADING } from "../../../reducers/Types";
import { APIHelper } from '../../../helpers';
import { Actions } from "react-native-router-flux";
import {  TOAST_ERROR, showCutomToast } from "../../../helpers/ToastHelper";

/**
 * Login process (call for each login)
 * @param email is email of user
 * @param password is password of user
 */
export const clickLoginButton = async (email: string, password: string) => {
    // Firebase
    const dispatch = store.dispatch;
    dispatch({type: LOGIN_LOADING, payload: true});
    Actions.home();
    dispatch({type: LOGIN_LOADING, payload: false});
}

/**
 * Go to register screen
 */
export const clickSignUp = () => {
    Actions.register();
}

