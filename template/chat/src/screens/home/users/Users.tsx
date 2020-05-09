import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './Users.style';
import { Header, ListItem } from '../../../components';
import { useSelector } from 'react-redux';
import { IRootState, store } from '../../../store';
import { getUsers } from './Users.action';
import { Actions } from 'react-native-router-flux';




export const Users = () => {
    const [language, setLanguage] = useState(store.getState().AppLanguageResponse.currentLanguage.USERS_SCREEN);
    useEffect(() => {
        getUsers(); // ComponentDidMount
    }, []);
    const props = useSelector<IRootState, any>((r_state: IRootState) => r_state.UsersResponse);
    return (
        <View style={styles.container}>
            <Header title={language.HEADER} />
            <View style={styles.logoContainer}>
                <FlatList
                    data={props.users}
                    renderItem={({ item }) => (
                        <ListItem 
                            avatarSource={'https://randomuser.me/api/portraits/lego/0.jpg'} 
                            title={item.username} 
                            onPress={() => Actions.messaging({data: item})} // Go to messaging page
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                    style={styles.flatList}
                />
            </View>
        </View>
    );
}