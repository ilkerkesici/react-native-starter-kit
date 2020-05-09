const DBAccess = require("../db");

/**
 * Save sended message and socket user
 * @param {any} req express request object
 * @param {any} token_data parsed token data
 */
const saveMessage = async (req, token_data) => {
  try {
    let data = req.body;
    let message_entity = {
      sender_id: token_data.id,
      taker_id: data.taker_id,
      data: data.message,
      type: data.message_type,
      created_on: new Date(),
    };
    await DBAccess.message.addNewMessage(message_entity); // Add new message
    await updateOrAddLastMessage(message_entity.sender_id, message_entity.taker_id, message_entity.data); // Update or ad last message
    await updateOrAddLastMessage(message_entity.taker_id, message_entity.sender_id, message_entity.data); // Update or add last message
    let sender = await DBAccess.user.getUserById(message_entity.sender_id);
    let taker = await DBAccess.user.getUserById(
      message_entity.taker_id
    );
    if (taker.length > 0 && taker[0].socket_id) {
      req.app.io.to(taker[0].socket_id).emit("message", message_entity);
      req.app.io
        .to(taker[0].socket_id)
        .emit("mesage_general", {...message_entity, username: sender[0].username});
    }

    // If socket id is null, ,it means user is offline.
    // If you notification access for this app you can send notification to taker in here.

    return { Status: true, Message: "Message sended successfully" };
  } catch (err) {
    return {
      Status: false,
      Message: "There is an unexpected error!",
      Data: null,
    };
  }
};

/**
 * Updating or creating last message object between two user
 * You can create trigger for this part on your db
 * @param {number} sender_id is sender_id
 * @param {number} taker_id is taker_id
 * @param {string} message is message
 */
const updateOrAddLastMessage = async (sender_id, taker_id, message) => {
  try {
    // Check is there any message from first user to second user
    let last_message = await DBAccess.message.getLastMessageBetweenUser(
      sender_id,
      taker_id
    );
    if(last_message.length > 0) 
        await DBAccess.message.updateLastMessageEntity(sender_id, taker_id, message);
    else    // If there is no message before
        await DBAccess.message.createNewLastMessgeEntity({
            my_id: sender_id,
            other_user_id: taker_id,
            last_message: message,
            am_i_read: 1, // It is true because this addition for sender
            last_update: new Date()
        });

  } catch (err){
      return {Status: false, Message: 'There is an unexpected error!', Data: null};
  }
};

/**
 * Get messages between two user with pagination
 * @param {any} data data from client side
 * @param {ant} token_data is parsed token data
 */
const getMessagesBetweenTwoUser = (data, token_data) => {
    return new Promise(async (resolve, reject) => {
        try{
            let result = await DBAccess.message.getMessagesBetweenUser(data.user_id, token_data.id, data.limit, data.offset);
            await DBAccess.message.updateLastMessageIsRead(token_data.id, data.user_id); // If user take messages, we assume that user see all messages
            resolve({Status: true, Data: result, Message: 'null'});
        }catch(err){
            reject({Status: false, Data: null, Message: err.toString()})
        }
    })
}

module.exports = {
  saveMessage,
  getMessagesBetweenTwoUser
};
