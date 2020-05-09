import CryptoJS from "react-native-crypto-js";
import { SECRET_KEY } from "../../config";

export const encrypt = (text) => {
    return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
}

export const decrypt = (text) => {
    return CryptoJS.AES.decrypt(text, SECRET_KEY).toString(CryptoJS.enc.Utf8);
}