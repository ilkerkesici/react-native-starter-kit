import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Platform } from 'react-native';
import { PRIMARY_COLOR } from '../../styles/Colors';
Ionicons.loadFont();
MaterialIcons.loadFont();
AntDesignIcons.loadFont();
MaterialCommunityIcons.loadFont();

export const BackIcon = (props: IIconProps) => {
    return Platform.OS === 'ios' ? 
        <Ionicons name={'ios-arrow-back'} size={props.size || 30} color={props.color || PRIMARY_COLOR} /> :
        <MaterialIcons name={'arrow-back'} size={props.size || 30} color={props.color || PRIMARY_COLOR} />
}

export const CaretDownIcon = (props: IIconProps) => {
    return <AntDesignIcons name={'caretdown'} size={props.size || 30} color={props.color || PRIMARY_COLOR} /> 
}

export const SwapIcon = (props: IIconProps) => {
    return <MaterialCommunityIcons name={'swap-vertical'} size={props.size || 30} color={props.color || PRIMARY_COLOR} /> 
}

export const ClsoeIcon = (props: IIconProps) => {
    return <AntDesignIcons name={'close'} size={props.size || 30} color={props.color || PRIMARY_COLOR} /> 
}




interface IIconProps {
    color?: string,
    size?: number
}

