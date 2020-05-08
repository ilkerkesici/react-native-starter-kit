import React, {useEffect} from 'react';
import { View } from 'react-native';
import { styles } from './Main.style';
import { Header } from '../../../components';






export const Main = () => {


    return (
        <View style={styles.container}>
            <Header title={'Main'} />
            <View style={styles.container}>
                
            </View>
        </View>
    );
}