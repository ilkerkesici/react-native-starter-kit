const encrypt = require('./criypto');
const DBAccess = require('../db');
const auth = require('./auth');

/**
 * Register user (call for each registeration)
 * @param {string} username username of user
 * @param {string} password password of user
 */
const createUser = (username, password) => {
    return new Promise(async (resolve, reject) => {
        try{
            let criypted_password = encrypt(password);
            let users = await DBAccess.user.getUserByUsername(username);
            if(users.length > 0 ) return reject({Status: false, Message: 'Username must be unique!', Data: null});
            let result = await DBAccess.user.addUser(username, criypted_password);
            resolve({Status: true, Message: 'User register successfully!', Data: null});
        }catch(err){
            reject(err);
        }
    })
}

/**
 * Login for user
 * @param {string} username is username of user
 * @param {string} password password of user
 */
const loginUser = (username, password) => {
    return new Promise(async (resolve, reject) => {
        try{
            const users = await DBAccess.user.getUserByUsername(username);
            if(users.length == 0 )  // Is user exist?
                return reject({Status: false, Message: 'There is no user with this username!', Data: null});
            const criypted_password = encrypt(password);
            if(users[0].password != criypted_password) // Is password valid?
                return reject({Status: false, Message: 'The password is wrong!', Data: null});
            const token = auth.createToken(users[0].id, username); // Createing token
            const response_data = {
                access_token : token,
                id: users[0].id
            }
            resolve({Status: true, Message: 'User register successfully!', Data: response_data});
        }catch(err){
            reject(err);
        }
    })
}



module.exports = {
    createUser,
    loginUser
}