import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './ChangeButton.style';
import { SwapIcon } from '../../icons';
import { SECONDARY_LIGHT_COLOR } from '../../../styles/Colors';

export const ChangeButton = (props: IChangeButton) => {
    return (
        <TouchableOpacity 
            activeOpacity={props.disable? 1 : 0} 
            onPress={() => props.disable ? null : props.onPress()} style={styles.container}
        >
            <SwapIcon color={SECONDARY_LIGHT_COLOR} />
        </TouchableOpacity>
    );
}

interface IChangeButton {
    onPress: () => void,
    disable?: boolean
}