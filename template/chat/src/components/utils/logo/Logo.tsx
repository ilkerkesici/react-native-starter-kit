import React from 'react';
import { Image } from 'react-native';
import {styles} from './Logo.style';

export const Logo = (props: ILogo) => {
    return (
        <Image style={[styles.image, props.style]} source={require('../../../assets/images/logo.png')} />
    );
}

interface ILogo {
    style?: any
}