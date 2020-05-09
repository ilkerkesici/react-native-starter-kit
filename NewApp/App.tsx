
import React from 'react';
import {
  StatusBar,
  View,
  AppState
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { RouterComponent, socket } from './src/containers';
import { PRIMARY_DARK_COLOR, WHITE_COLOR } from './src/styles/Colors';
import { Toast } from './src/components';
import { handleAppStateChange, decrypt, TOAST_MESSAGE, showCutomToast } from './src/helpers';
import { Actions } from 'react-native-router-flux';
import { getAllMessagesList } from './src/screens/home/all_messages/AllMessage.action';

AppState.addEventListener('change', handleAppStateChange); // Listener for app states


socket.on('mesage_general', (msg: any) => {
  if(Actions.currentScene !== 'messaging'){
    if(Actions.currentScene != '_all_messages'){
      showCutomToast({
          message: decrypt(msg.data), 
          type: TOAST_MESSAGE, 
          title: msg.username,
          onPress: () => Actions.messaging({data: {username: msg.username, id: msg.sender_id}})
        });
      }
    getAllMessagesList();
  }
})



const App = () => {
  return (
    <View style={{flex: 1, alignSelf:'stretch'}}>
    <Provider store={store}>
      <StatusBar barStyle='light-content' backgroundColor={PRIMARY_DARK_COLOR} />
      <View style={{flex: 1, backgroundColor: WHITE_COLOR}}>
        <RouterComponent />
        <Toast />
      </View>
    </Provider>
    </View>);
};

export default App;

