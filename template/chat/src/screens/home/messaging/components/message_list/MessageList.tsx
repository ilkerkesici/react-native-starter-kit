import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './MessageList.style';
import { getMessages, onEndReach, saveFlatlistRef } from '../../Messaging.actions';
import { Baloon } from './components';
import { IRootState } from '../../../../../store';
import { useSelector } from 'react-redux';
import { socket } from '../../../../../containers';
import { Actions } from 'react-native-router-flux';
import { getAllMessagesList } from '../../../all_messages/AllMessage.action';


/**
 * Listed messages
 * We must hold messages on state not reducer 
 * because when we go to other user message screen, we should not lose this user message info
 * 
 * @param props is have user info
 */
export const MessageList = (props: IMessageInput) => {
    

    useEffect(() => {
        // ComponentDidMount
         getMessages(props.user_id, 0, false);

         socket.on("message", (msg: any) => {
             console.log(msg);
             console.log(props.user_id);
             console.log('Sender : ', msg.sender_id)
             console.log('Ekran: ', Actions.currentScene);
             console.log( msg.sender_id == props.user_id);
            if(Actions.currentScene == "messaging" && msg.sender_id == props.user_id){ // If reciever is this user
                getMessages(props.user_id, 0, false); // Get data again
            }
          })

          return () => { // ComponentWiiUnmount
            socket.off('message'); // Close socket connection
            getAllMessagesList(); // Update all message list
        }
    }, []);

    const messages = useSelector<IRootState, any>((r_state: IRootState) => r_state.MessageResponse.messages);

    return (
        <View >
            <FlatList
                    ref={ref => saveFlatlistRef(ref)} // Save our flatlist referance redux store to scroll down automaticly
                    data={messages}
                    renderItem={({ item }) => (
                        <Baloon sender_id={item.sender_id} text={item.data} date={item.created_on} />
                    )}
                    keyExtractor={item => item.id.toString()}
                    style={styles.flatlist}
                    inverted={true}
                    onEndReachedThreshold={0}
                    onEndReached={() => onEndReach(props.user_id)} //onEndREach(props.user_id)
                />
        </View>
    );
}

interface IMessageInput {
    user_id: number
}

interface IMessageListState{
    messages: any,
    is_end: boolean,
    offset: number
}