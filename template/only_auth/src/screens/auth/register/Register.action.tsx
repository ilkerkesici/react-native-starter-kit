import { store } from "../../../store";
import {  REGISTER_LOADING } from "../../../reducers/Types";
import { Actions } from "react-native-router-flux";
import { showCutomToast, TOAST_ERROR, TOAST_SUCCESS } from "../../../helpers/ToastHelper";

/**
 * Sign up usert to firebase
 * @param email is email of user
 * @param password password of user
 * @param passwordConfirm confirmed password of user
 */
export const clickRegisterButton = async (email: string, password: string, passwordConfirm: string) => {
    store.dispatch({type: REGISTER_LOADING, payload: true}); // Updating register loading
    
    if(!validation(password, passwordConfirm)) return; // Validation for given inputs
    
    store.dispatch({type: REGISTER_LOADING, payload: false}); // Updating register loading
    
}

/**
 * Validation for fields
 * @param password is user password
 * @param passwordConfirm is confirmed password
 */
const validation = (password: string, passwordConfirm: string) => {
    if (password.trim().length < 6 || passwordConfirm.trim().length < 6) {
        showCutomToast({type: TOAST_ERROR, message: 'Fields are invalid!'});
        store.dispatch({ type: REGISTER_LOADING, payload: false }); // Loading update
        return false;
    }
    else if(password !== passwordConfirm){ // If password don't match
        // Show toast
        showCutomToast({type: TOAST_ERROR, message: "Passwords don't match!"});
        store.dispatch({ type: REGISTER_LOADING, payload: false }); // Loading update
        return false;
    }
    return true
}

