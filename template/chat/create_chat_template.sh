echo creating your authanticate_template....
echo $1 createing template

mkdir $1.Backend
cp -R ./template/chat/backend/ ./$1.Backend
cd $1.Backend
yarn install

rm -rf .env # If .env gile exist, clear
touch .env
echo "host=YOUR_DB_HOST
user=YOUR_DB_USER_NAME
password=YOUR_DB_PASSWORD
database=YOUR_DB_NAME
secret_key=YOUR_SECRET_KEY
crypto_func=sha256
crypto_digest=hex
port=80" >> .env  # You can change
cd ..

cp -R ./template/chat/src ./$1
cd $1

rm -rf App.tsx
# Create typescript App file
touch App.tsx

echo "
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
" >> App.tsx

yarn add @types/react-native-vector-icons @types/react-redux @types/redux @types/redux-thunk react-native-dropdownalert react-native-gesture-handler react-native-reanimated react-native-router-flux react-native-screens react-native-vector-icons react-redux @react-native-community/async-storage react-native-crypto-js socket.io-client @types/socket.io-client
if [[ "$OSTYPE" == "darwin"* ]]; then
        # Mac OSX
        # Install pod dependencies
        cd ios
        pod install
        cd ..
        echo Your app is opening ...
        npx react-native run-ios --simulator="iPhone 8" 
fi


