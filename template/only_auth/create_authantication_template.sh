echo creating your authanticate_template....
echo $1 createing template


cp -R ./template/only_auth/src ./$1
cd $1

rm -rf App.tsx
# Create typescript App file
touch App.tsx

echo "import React from 'react';
import {
  StatusBar,
  View,
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { RouterComponent } from './src/containers';
import { PRIMARY_DARK_COLOR, WHITE_COLOR } from './src/styles/Colors';
import {Toast} from './src/components';



const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle='light-content' backgroundColor={PRIMARY_DARK_COLOR} />
      <View style={{flex: 1, backgroundColor: WHITE_COLOR}}>
        <RouterComponent />
        <Toast />
      </View>
    </Provider>
    )
};

export default App;

" >> App.tsx

yarn add @types/react-native-vector-icons @types/react-redux @types/redux @types/redux-thunk react-native-dropdownalert react-native-gesture-handler react-native-reanimated react-native-router-flux react-native-screens react-native-vector-icons react-redux @react-native-community/async-storage

if [[ "$OSTYPE" == "darwin"* ]]; then
        # Mac OSX
        # Install pod dependencies
        cd ios
        pod install
        cd ..
        echo Your app is opening ...
        npx react-native run-ios --simulator="iPhone 8" 
fi



