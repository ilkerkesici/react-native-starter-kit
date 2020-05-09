/**
 * Checking of registeration parameters
 * @param {string} username username of user
 * @param {string} password password of user
 */
const createUserValidator = (username, password) => {
    if(!username || 
       !password ||
       (username.trim().length < 6 )||  // Username must be grather than 5
       (password.trim().length < 6 )||  // Password must be grather than 5
       (username.trim() != username) || // Username cannot contain space
       (password.trim() != password)    // Password cannot contain space
        ) return false;
    return true;
}

module.exports = {
    createUserValidator
}