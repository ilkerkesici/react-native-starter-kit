/*
* My custom indicator
*/ 

import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import { PRIMARY_COLOR } from '../../styles/Colors';

export const Spinner = (props: ISpinner) => {
    return(
        <View style={props.style} >
            <ActivityIndicator color={props.color || PRIMARY_COLOR} size={props.size || 'large'} />
        </View>
    );
}

interface ISpinner{
    color?: string,
    size?: number | "small" | "large",
    style?: any
}

enum Size{
    large = 'large',
    small = 'small',
}