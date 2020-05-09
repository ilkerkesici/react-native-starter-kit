import AsyncStorage from '@react-native-community/async-storage';

/**
 * Save access token to phone
 * @param token is user access token
 */
export const saveUserInfo = async (user_info: IUserInfo) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user_info));
    } catch (e) {
      // saving error
      return null;
    }
  }

  /**
   * Getting user info from asyncstorage
   */
export const getUserInfo = async () => {
    try {
      const value = await AsyncStorage.getItem('user')
      if(value !== null) {
        // value previously stored
        return JSON.parse(value);
      }
      return null;
    } catch(e) {
      // error reading value
      return null;
    }
}

/**
 * Delete user info from asyncstorage
 */
export const deleteUserInfo = async () => {
    try {
        await AsyncStorage.removeItem('user')
        return;
      } catch(e) {
        // error reading value
        return;
      }
}


  interface IUserInfo{
      access_token: string
  }