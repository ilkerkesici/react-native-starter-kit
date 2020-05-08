import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { styles } from './styles';
import { BackIcon } from '../icons';
import { WHITE_COLOR } from '../../styles/Colors';
import { onPressBack } from './Header.actions';

export const Header = (props: IHeader) => {
    return (
        <View style={styles.container}>
            <View style={styles.instance}>
                <Left back={props.back} rightIcon={props.rightIcon} />
                <View style={styles.body}>
                    <Text numberOfLines={1} style={styles.title}> {props.title} </Text>
                    {props.subTitle
                        ? <Text style={styles.subTitle}> {props.subTitle} </Text>
                        : null}
                </View>
                <Right back={props.back} rightIcon={props.rightIcon} onRightIconPress={props.onRightIconPress} />
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
    else if (Platform.OS == "ios" && props.rightIcon)
        return <View style={styles.iconWrapper} />
    return <View />
}

export const Right = (props: IHeader) => {
    if (props.rightIcon) {
        return (
            <TouchableOpacity
                activeOpacity={props.onRightIconPress ? 0.5 : 1}
                style={styles.iconWrapper}
                onPress={() => props.onRightIconPress ? props.onRightIconPress() : null}
            >
                {props.rightIcon}
            </TouchableOpacity>
        );
    }
    else if (props.back) { // for center the title
        return (
            <View style={styles.iconWrapper} />
        );
    }
    return <View />
}

interface IHeader {
    back?: boolean,
    title?: string,
    subTitle?: string,
    rightIcon?: React.ReactNode,
    onRightIconPress?: () => void
}