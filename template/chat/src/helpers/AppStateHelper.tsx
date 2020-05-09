import { store } from "../store";
import { Actions } from "react-native-router-flux";
import { socket } from "../containers";


export const handleAppStateChange = (nextAppState: string) => {
    const user = store.getState().UserInfoResponse.user;
    if(!user) return; // If user not logged in

    if(Actions.currentScene === "splash") return; // If app is opende newly
    const token = user.access_token;
    if (token && nextAppState === 'active') {
        socket.emit("user_connected", token);
    }
    else if(token && (nextAppState === 'inactive' || nextAppState === "background")){
        socket.emit('user_disconnect', token);
    }  
}