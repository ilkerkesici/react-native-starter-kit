const DB = require('./connection');

/**
 * Getting online users
 */
const getOnlineUsers = () => {
    return DB('users').where('last_seen', null);
}

/**
 * Updating user info is online or not
 * @param {int} user_id is user id who has been online
 * @param {string} socket_id is user socket id who has been online
 */
const updateUserLastSeenAsOnline = (user_id, socket_id) => {
    return DB('users')
        .where('id', user_id)
        .update({
            last_seen: null,
            socket_id
        })
}

/**
 * Update a user last seen from db
 * @param {number} user_id user id who has been offline
 */
const updateUserLastSeenAsOffline = (user_id) => {
    return DB('users')
            .where('id', user_id)
            .update({
                last_seen: new Date()
            })
}

/**
 * Getting users who are onine and messaging with new connectes user
 * @param {number} user_id new connected user id
 */
const getConnectedOnlineUserOfOtherUser = (user_id) => {
    return DB('last_messages_between_users')
            .where('other_user_id', user_id)
            .join('users', 'users.id', 'last_messages_between_users.my_id')
            .where('last_seen', null);
}

/**
 * Get last message object between two user
 * @param {number} sender_id is message sender id
 * @param {number} taker_id message taker id
 */
const getLastMessageBetweenUser = (sender_id, taker_id) => {
    return DB('last_messages_between_users')
            .where('my_id', sender_id)
            .andWhere('other_user_id', taker_id);
}

/**
 * Create new last message entity
 * @param {any} data is inserted data to last message entity
 */
const createNewLastMessgeEntity = (data) => {
    return DB('last_messages_between_users')
            .insert(data);
}

/**
 * Update last message entity
 * @param {number} sender_id is message sender id
 * @param {number} taker_id is message taker id
 * @param {string} message is message data
 */
const updateLastMessageEntity = (sender_id, taker_id, message) => {
    return DB('last_messages_between_users')
            .where('my_id', sender_id)
            .andWhere('other_user_id', taker_id)
            .update({
                last_message: message,
                am_i_read: false,
                last_update: new Date()
            });
}

/**
 * Add new message to db
 * @param {any} data is entity of message
 */
const addNewMessage = (data) => {
    return DB('messages')
            .insert(data);
}

/**
 * 
 * @param {number} first_user_id is user id
 * @param {number} second_user_id is other user id
 * @param {number} limit is pagination limit
 * @param {number} offset is pagination page
 */
const getMessagesBetweenUser = (first_user_id, second_user_id, limit, offset) => {
    let query = `(sender_id=${first_user_id} AND taker_id=${second_user_id}) OR (sender_id=${second_user_id} AND taker_id=${first_user_id})`;
    if(offset && limit) query += `ORDER BY id DESC LIMIT ${limit} OFFSET ${offset * limit}`;
    
    return DB('messages').whereRaw(query);
}

/**
 * Updating messages are red
 * @param {number} my_id is user id who send message
 * @param {numner} other_id user id who take message
 */
const updateLastMessageIsRead = (my_id, other_id) => {
    return DB('last_messages_between_users')
            .where('my_id', my_id)
            .andWhere('other_user_id', other_id)
            .update({
                am_i_read: 1
            });
}

/**
 * Get message list of user
 * @param {number} user_id is id of user who send request
 */
const getLastMessageListAndUserInfo = (user_id) => {
    return DB('last_messages_between_users')
            .where('my_id', user_id)
            .join('users', 'users.id', 'last_messages_between_users.other_user_id')
            .orderBy('last_messages_between_users.last_update', 'desc')
            .select('users.id')
            .select('users.username')
            .select('last_messages_between_users.last_message')
            .select('last_messages_between_users.am_i_read')
            .select('last_messages_between_users.last_update')
            .select('users.last_seen');
}



module.exports = {
    getOnlineUsers,
    updateUserLastSeenAsOnline,
    getConnectedOnlineUserOfOtherUser,
    updateUserLastSeenAsOffline,
    getLastMessageBetweenUser,
    createNewLastMessgeEntity,
    updateLastMessageEntity,
    addNewMessage,
    getMessagesBetweenUser,
    updateLastMessageIsRead,
    getLastMessageListAndUserInfo
}