import React, { useEffect, useState } from 'react';
import { Header } from '../../../../../components';
import { socket } from '../../../../../containers';
import { Actions } from 'react-native-router-flux';
import { getUserInfo } from '../../Messaging.actions';
import { dateStringToTime } from '../message_list/components/baloon/Baloon.helper';
import { store } from '../../../../../store';



// Socket listener here for online user
export const MessagingHeader = (props: IMessageingHeader) => {
    const [language, setLanguage] = useState(store.getState().AppLanguageResponse.currentLanguage.MESSAGING_SCREEN);
    const LOADING_STRING = language.LOADING + '...';
    const [online, setOnline] = useState(LOADING_STRING);
    useEffect(() => {
        // ComponentDidMount

        getUserInfo(props.user_id) // get user info for last_seen
            .then(res => {
                res ? setOnline(res.last_seen) : null;
            });

        socket.on("user_info", (msg: any) => {
            if (Actions.currentScene === "messaging" && msg.id == props.user_id) { // If reciever is this user
                setOnline(msg.status);
            }
        })
        return () => { // ComponentWiiUnmount
            socket.off('user_info');  // Close socket connection
        }
    }, []);
    let subTitle = LOADING_STRING;
    if (!online)
        subTitle = language.ONLINE;
    else if (online && online !== LOADING_STRING)
        subTitle = language.LAST_SEEN + ' ' + dateStringToTime(online);  // Online string to title
    
    return (
        <Header title={props.username} back subTitle= {subTitle} />
    );
}

interface IMessageingHeader {
    username: string,
    user_id: number,
    last_seen?: string
}