import { store } from "../../store";
import { TOAST_REF_CHANGED, TOAST_ON_CANCEL_CHANGED, TOAST_ON_CLOSE_CHANGED, TOAST_ON_PRESS_CHANGED, TOAST_SHOW_CANCEL_CHANGED } from "../../reducers/Types";

import { TOAST_SUCCESS, TOAST_ERROR, TOAST_MESSAGE } from "../../helpers/ToastHelper";

const DURATION = 2000;
const MessageIcon = require('../../assets/images/mail_icon.png') ;

/**
 * Save ref the toast to redux store (call each app opened)
 * @param ref is react-native-dropdownalert
 */
export const saveRef = (ref: any) => {
    store.dispatch({ type: TOAST_REF_CHANGED, payload: ref });
}

/**
 * Show toast with given params
 * @param props is toast props
 */
export const showToast = (props: IToast) => {
    updateProps(props);
    const toast = store.getState().ToastResponse.toast;
    if (!toast) return; // Check ref is stored
    switch (props.type) {
        case TOAST_SUCCESS:
            toast.alertWithType('success', 'Success', props.message, null, DURATION);
        case TOAST_ERROR:
            toast.alertWithType('error', 'Error', props.message, null, DURATION);
        case TOAST_MESSAGE:
            let payload = {source: MessageIcon}
            toast.alertWithType('warning', props.title || 'New Message', props.message, payload, DURATION);

    }
}

/**
 * Save toast props to use into Toast reducer because use each of function
 * @param props is Toast props
 */
const updateProps = (props: IToast) => {
    const dispatch = store.dispatch;
    if (props.onCancel)
        dispatch({ type: TOAST_ON_CANCEL_CHANGED, payload: props.onCancel });
    if (props.onClose)
        dispatch({ type: TOAST_ON_CLOSE_CHANGED, payload: props.onClose });
    if (props.onPress)
        dispatch({ type: TOAST_ON_PRESS_CHANGED, payload: props.onPress });
    if (props.showCancel)
        dispatch({ type: TOAST_SHOW_CANCEL_CHANGED, payload: props.showCancel });
}

/**
 * Clear toast props from reducer
 */
const clearProps = () => {
    const dispatch = store.dispatch;
    dispatch({ type: TOAST_ON_CANCEL_CHANGED, payload: () => null });
    dispatch({ type: TOAST_ON_CLOSE_CHANGED, payload: () => null });
    dispatch({ type: TOAST_ON_PRESS_CHANGED, payload: () => null });
    dispatch({ type: TOAST_SHOW_CANCEL_CHANGED, payload: false });
}

/**
 * Toast on cancel
 */
export const onCancel = () => {
    const onCancel = store.getState().ToastResponse.onCancel;
    if(onCancel) onCancel();
}

/**
 * Toast on press
 */
export const onTop = () => {
    const onPRess = store.getState().ToastResponse.onPress;
    if(onPRess) onPRess();
}

/**
 * Toast on close
 */
export const onClose = () => {
    const externalOnClose = store.getState().ToastResponse.onClose; // 
    externalOnClose();
    clearProps();
}

export interface IToast {
    //title: string,
    message: string,
    type: string, // Success, Error, Message,
    onPress?: () => void,
    onClose?: () => void,
    onCancel?: () => void,
    showCancel?: boolean,
    title?: string
}