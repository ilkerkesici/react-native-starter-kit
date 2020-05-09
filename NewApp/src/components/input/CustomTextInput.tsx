import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './TextInput.style';
import { SECONDARY_DARK_COLOR } from '../../styles/Colors';

export const CustomTextInput = (props: CustomTextInputProps) => {
    return (
        <TextInput
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}
            style={styles.input}
            placeholderTextColor={SECONDARY_DARK_COLOR}
            value={props.value}
        />
    );

}


interface CustomTextInputProps {
    placeholder?: string,
    onChangeText?: (text: string) => void,
    secureTextEntry?: boolean,
    value?: string
}