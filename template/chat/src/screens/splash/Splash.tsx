/*
* This is the firs screen when app is opened. 
* All of sessions process executed here.
*/

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Splash.style';
import { Actions } from 'react-native-router-flux';
import { initial } from './Splash.action';
import { Logo } from '../../components';

export const Splash = () => {
    initial(); // init funciton for application
    return (
        <View style={styles.container}>
            <Logo />
        </View>
    );
}


