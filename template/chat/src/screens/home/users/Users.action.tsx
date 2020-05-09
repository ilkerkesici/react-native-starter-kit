import { APIHelper } from "../../../helpers"
import { store } from "../../../store";
import { USERS_LIST_CHANGED, USERS_LOADING } from "../../../reducers/Types";

/**
 * Getting users from API
 */
export const getUsers = async () => {
    const dispatch = store.dispatch;
    dispatch({type: USERS_LOADING, payload: true});
    try{
        let response = await APIHelper.getRequest('/api/users'); // Get data from API
        dispatch({type: USERS_LIST_CHANGED, payload: response.Data}); // Update users lsit
        dispatch({type: USERS_LOADING, payload: false});
    }catch(err){
        dispatch({type: USERS_LOADING, payload: false});
    }
}