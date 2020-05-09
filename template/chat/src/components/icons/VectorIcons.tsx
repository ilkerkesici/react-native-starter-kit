import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';
import { PRIMARY_COLOR } from '../../styles/Colors';
Ionicons.loadFont();
MaterialIcons.loadFont();
FontAwesomeIcons.loadFont();

export const BackIcon = (props: IIconProps) => {
    return Platform.OS === 'ios' ? 
        <Ionicons name={'ios-arrow-back'} size={props.size || 30} color={props.color || PRIMARY_COLOR} /> :
        <MaterialIcons name={'arrow-back'} size={props.size || 30} color={props.color || PRIMARY_COLOR} />
}

export const MessageIcon = (props: IIconProps) => {
    return Platform.OS === 'ios' ? 
        <Ionicons name={'ios-mail'} size={props.size || 30} color={props.color || PRIMARY_COLOR} /> :
        <MaterialIcons name={'mail'} size={props.size || 30} color={props.color || PRIMARY_COLOR} />
}

export const UsersIcon = (props: any) => {
    let color =
        props.focused == true ? props.activeTintColor : props.inactiveTintColor;
    return <FontAwesomeIcons name={'users'} size={props.size || 30} color={color || PRIMARY_COLOR} />
}

export const MailIcon = (props: any) => {
    let color =
        props.focused == true ? props.activeTintColor : props.inactiveTintColor;
    return <MaterialIcons name={'mail'} size={props.size || 30} color={color || PRIMARY_COLOR} />
}
//md-send

export const SendIcon = (props: IIconProps) => {
    return <Ionicons name={'md-send'} size={props.size || 30} color={props.color || PRIMARY_COLOR} /> ;
}



interface IIconProps {
    color?: string,
    size?: number
}

