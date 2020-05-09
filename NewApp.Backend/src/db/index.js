const MessageDB = require('./MessageDataAccess');
const UserDB = require('./UserDataAccess');

module.exports = {
    message: MessageDB,
    user: UserDB
}