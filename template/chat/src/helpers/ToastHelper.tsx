import { showToast, IToast } from '../components/toast/Toast.action';

export const TOAST_SUCCESS = 'toast_success';
export const TOAST_ERROR = 'toast_error';
export const TOAST_MESSAGE = 'toast_message';

export const showCutomToast = (props: IToast) => {
    showToast(props);
}