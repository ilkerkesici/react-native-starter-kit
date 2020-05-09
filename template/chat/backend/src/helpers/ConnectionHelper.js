const DBAccess = require('../db');
const auth = require('./auth');

/**
 * Process when user connect (call for each user connection)
 * @param {string} token user access token
 * @param {string} socket_id user socket id
 * @param {any} socket is socket for emit data
 */
const userConnect = (token, socket_id, socket) => {
    return new Promise(async (resolve, reject) => {
        let user_id;
        if(!token || !socket_id)  // Is parameter exist?
            return reject({Status: false, Message: 'Invalid parameter', Data: null});
        
        try{
            let data = await auth.token_parse(token);
            user_id = data.data.id;
            
        }catch(err){
        }
        try{
            await DBAccess.message.updateUserLastSeenAsOnline(user_id, socket_id);
            let users = await DBAccess.message.getConnectedOnlineUserOfOtherUser(user_id);
            // Emit all user data
            for(let i = 0; i < users.length; i++){
                socket.to(users[i].socket_id).emit('user_info', { // Emit user online or not
                    id: user_id, // Send my id to check client side
                    status: null
                })
            }
        }catch(err){
        }
    })
}

const userDisconnect = (token, socket) => {
    return new Promise(async (resolve, reject) => {
        let user_id;
        if(!token)  // Is parameter exist?
            return reject({Status: false, Message: 'Invalid parameter', Data: null});
        
        try{
            let data = await auth.token_parse(token);
            user_id = data.data.id;
        }catch(err){

        }
        try{
            await DBAccess.message.updateUserLastSeenAsOffline(user_id);
            let users = await DBAccess.message.getConnectedOnlineUserOfOtherUser(user_id);
            for(let i = 0; i < users.length; i++){
                socket.to(users[i].socket_id).emit('user_info', { // Emit user online or not
                    id: user_id,  // Send my id to check client side
                    status: new Date()
                })
            }
            // Emit all user data
        }catch(err){

        }
    })
}

module.exports = {
    userConnect,
    userDisconnect
}