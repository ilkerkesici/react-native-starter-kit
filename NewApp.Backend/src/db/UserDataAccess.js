const DB = require("./connection");

/**
 * Get user by username ()
 * @param {string} username is username of user
 */
const getUserByUsername = (username) => {
  return DB("users").where("username", username);
};

/**
 * Add user to users table (call for each registeration)
 * @param {string} username is username of user
 * @param {string} password is password of user
 */
const addUser = (username, password) => {
  return DB("users").insert({
    username,
    password,
  });
};

/**
 * Get user by User ID
 * @param {number} id is searched user id
 */
const getUserById = (id) => {
  return DB("users").where("id", id);
};

/**
 * Get user info without password
 * @param {number} id is user id
 */
const getUserByIdForWithoutPassword = (id) => {
  return DB("users").where("id", id)
  .where('id', id)
  .select('id')
  .select('username')
  .select('last_seen');
}

/**
 * Deleteing user by id
 * @param {number} id is deleted user id
 */
const deleteUserById = (id) => {
  return DB("users").where("id", id).del();
};

/**
 * Get all users without the user
 * @param {number} user_id user id which is take the datas
 */
const getUserWitoutUser = (user_id) => {
  return DB('users')
          .where('id', '!=', user_id)
          .select('id')
          .select('username')
          .select('last_seen');
}

module.exports = {
  getUserByUsername,
  addUser,
  getUserById,
  deleteUserById,
  getUserWitoutUser,
  getUserByIdForWithoutPassword
};
