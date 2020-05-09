import React from 'react';
import { View} from 'react-native';
import { styles } from './Messaging.style';
import {MessagingHeader, MessagingInput, MessageList} from './components';


// Expecting given props  data from actions data: {username, user_id, last_seen?}
export const Messaging = (props: any) => {
    
    return (
        <View style={styles.container}>
            <MessagingHeader username={props.data.username} user_id={props.data.id} />
            <View style={styles.messageListContainer}>
                <MessageList user_id={props.data.id} />
            </View>
            <MessagingInput user_id={props.data.id} />
        </View>
    );
}

interface IMessaging{
    username: string,
    user_id: string,
    last_seen? : string
}