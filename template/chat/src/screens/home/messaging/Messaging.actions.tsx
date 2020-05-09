import { APIHelper, encrypt, decrypt } from "../../../helpers";
import { store } from "../../../store";
import { MESSAGES_CHANGED, MESSAGES_OFFSET_CHANGES, IS_END_CHANGED, FLATLIST_CHANGED } from "../../../reducers/Types";
import { getAllMessagesList } from '../all_messages/AllMessage.action';

const LIMIT = 10;

/**
 * Sending message a user
 * @param text is message text
 * @param user_id is user id who given message
 */
export const sendMessage = async (text: string, user_id: number) => {
    const dispatch = store.dispatch;
    let encrypted = encrypt(text) // Encrypt sent message
    try {
        let response = await APIHelper.postRequest('/api/message', {
            message: encrypted,
            message_type: 'TEXT',
            taker_id: user_id
        });

        if (response.data.Status) {
            // Get Messages again
            dispatch({ type: MESSAGES_OFFSET_CHANGES, payload: 0 }); // Update pagination controll datas
            dispatch({ type: IS_END_CHANGED, payload: false }); // Update pagination controll datas
            getMessages(user_id, 0, false);
            getAllMessagesList(); // Update list of messages
        }
    } catch (err) {

    }
}

/**
 * Get messages between two user
 * @param other_user_id is user id who cheating with me
 * @param offset is pagination page
 * @param is_end control for taking all messages also means pagining is end
 */
export const getMessages = async (other_user_id: number, offset: number, is_end: boolean) => {
    const dispatch = store.dispatch;
    const old_messages = store.getState().MessageResponse.messages;
    try {
        let endpoint = `/api/message?user_id=${other_user_id}&offset=${offset}&limit=${LIMIT}`;
        let response = await APIHelper.getRequest(endpoint);
        if (response.Data.length == 0) { // If all messages taked
            dispatch({ type: IS_END_CHANGED, payload: true }); //Update the end controller
            return null;
        }
        if (response.Data && response.Status) { // If response is correct
            const messages = decryptMessages(response.Data);
            if (offset > 0) {       // If pagination
                dispatch({ type: MESSAGES_CHANGED, payload: old_messages.concat(messages) });   // Update messages
                let new_offset = offset + 1;
                dispatch({ type: MESSAGES_OFFSET_CHANGES, payload: new_offset }); // Update the offset
                return old_messages;
            }
            let new_offset = offset + 1;
            dispatch({ type: MESSAGES_CHANGED, payload: messages }); // Update messages
            dispatch({ type: MESSAGES_OFFSET_CHANGES, payload: new_offset }); // Update the offset
            return messages
        }
        return null
    } catch (err) {
        return null
    }

}

/**
 * Decrypt the encrypted messages for this user
 * @param data is message data from API
 */
const decryptMessages = (data: any[]) => {
    let newData = data;
    for (let i = 0; i < newData.length; i++) {
        data[i].data = decrypt(data[i].data)
    }
    return newData;
}

/**
 * Get data on reach end of list
 * @param user_id is user in who communicate with me
 */
export const onEndReach = (user_id: number) => {
    if (store.getState().MessageResponse.is_end) return; // If no data is taken from API
    let offset = store.getState().MessageResponse.offset;
    getMessages(user_id, offset, false);
}

/**
 * Save the flatlist referance redux store
 * @param flatList is flatlist referance
 */
export const saveFlatlistRef = (flatList: any) => {
    store.dispatch({type: FLATLIST_CHANGED, payload: flatList});
}

/**
 * Get info of given id user
 * @param user_id is user id who get info
 */
export const getUserInfo = async (user_id: number) => {
    try{
        let user_data = await APIHelper.getRequest(`/api/users?id=${user_id}`);
        return user_data.Data
    }catch(err){
        return null;
    }  
}   

