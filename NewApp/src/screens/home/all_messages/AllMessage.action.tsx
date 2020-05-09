import { APIHelper, decrypt } from "../../../helpers"
import { store } from "../../../store";
import { ALL_MESSAGES_CHANGED } from "../../../reducers/Types";

/**
 * Get last messages list user
 */
export const getAllMessagesList = async () => {
    const dispatch = store.dispatch;
    try{
        let response = await APIHelper.getRequest('/api/message');
        let decrypted = decryptAPIData(response.Data);
        dispatch({type: ALL_MESSAGES_CHANGED, payload: decrypted});
        return decrypted;
    }catch(err){
        return null;
    }
}

/**
 * Decrypt the messages coming from API
 * @param messages is a message list data from API
 */
const decryptAPIData = (messages: any[]) => {
    let temp = messages;
    for(let i = 0; i < temp.length; i++){
        temp[i].last_message = decrypt(temp[i].last_message);
    }
    return temp;   
}