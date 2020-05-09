import React from 'react';
import { Text, View } from 'react-native';
import { sqlDateCovertToTime } from './Baloon.helper';
import { store } from '../../../../../../../store';
import { styles } from './Baloon.style';

export const Baloon = (props: IBaloon) => {
    const user_id = store.getState().UserInfoResponse.user.id;
    let container_style = props.sender_id == user_id ? styles.containerMy : styles.containerOther;
    return (
        <View style={[styles.container, container_style]}>
            {
                props.sender_id == user_id ?
                    <MyBaloon sender_id={props.sender_id} date={sqlDateCovertToTime(props.date)} text={props.text} /> :
                    <OtherBaloon sender_id={props.sender_id} date={sqlDateCovertToTime(props.date)} text={props.text} />
            }
        </View>
    );
}

export const MyBaloon = (props: IBaloon) => {
    return (
        <View style={styles.myBaloon}>
            <Text style={styles.text}>{props.text}</Text>
            <View style={styles.myTimeContiner}>
                <Text style={styles.timeText}>{props.date}</Text>
            </View>
        </View>
    )
}

export const OtherBaloon = (props: IBaloon) => {
    return (
        <View style={styles.otherBaloon}>
            <Text style={styles.text}>{props.text}</Text>
            <View style={styles.otherTimeContiner}>
                <Text style={styles.timeText}>{props.date}</Text>
            </View>
        </View>
    )
}


interface IBaloon {
    text: string,
    sender_id: number,
    date: string
}