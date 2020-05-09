import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Header.style.ios';
import { BackIcon } from '../icons';
import { WHITE_COLOR } from '../../styles/Colors';
import { onPressBack } from './Header.actions';

export const Header = (props: IHeader) => {
    return (
        <View style={styles.container}>
            <View style={styles.instance}>
                <Left back={props.back} />
                <View style={styles.body}>
                    <Text numberOfLines={1} style={styles.title}> {props.title} </Text>
                    {props.subTitle 
                    ? <Text style={styles.subTitle}> {props.subTitle} </Text> 
                    : null}
                </View>
                <Right back={props.back} />
            </View>
        </View>
    );
}
export const Left = (props: IHeader) => {
    if (props.back)
        return (
            <TouchableOpacity style={styles.iconWrapper} onPress={onPressBack}>
                <BackIcon color={WHITE_COLOR} />
            </TouchableOpacity>
        );
    return <View />
}

export const Right = (props: IHeader) => {
    if(props.back){ // for center the title
        return(
            <View style={styles.iconWrapper} />
        );
    }
    return <View />
}

interface IHeader {
    back?: boolean,
    title?: string,
    subTitle?: string
}