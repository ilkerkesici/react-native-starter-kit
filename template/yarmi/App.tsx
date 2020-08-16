import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'store';
import { RouterComponent } from 'containers';
import { Color } from 'styles/Colors';
import {Toast} from 'components';




const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle='light-content' backgroundColor={Color.white} />
      <View style={{flex: 1, backgroundColor: Color.white}}>
        <RouterComponent />
        <Toast />
      </View>
    </Provider>
    )
};

export default App;


