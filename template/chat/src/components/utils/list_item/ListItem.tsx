import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './ListItem.style';

export const ListItem = (props: IListItem) => {
    return (
        <TouchableOpacity
            onPress={props.onPress ? props.onPress : () => null}
            activeOpacity={props.onPress ? 0.5 : 1}
            style={styles.container}
        >
            {props.avatarSource ? <Avatar source={props.avatarSource} /> : <View />}
            <View style={styles.body}>
                <Text style={styles.title}>{props.title}</Text>
                {
                    props.subtitle ?
                        <Text numberOfLines={2} style={styles.subtitle}>{props.subtitle}</Text> :
                        null
                }
            </View>
            {props.rightDot ?
                <NotReadDot /> :
                null
            }
        </TouchableOpacity>
    );
}

export const Avatar = (props: IAvatar) => {
    return (
        <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={{ uri: props.source }} />
        </View>
    );
}

const NotReadDot = () => {
    return (
        <View style={styles.dotContaienr}>
            <View style={styles.dot} />
        </View>
    );
}

interface IListItem {
    title: string,
    avatarSource?: string,
    onPress?: () => void,
    subtitle?: string,
    rightDot?: boolean
}

interface IAvatar {
    source: string
}