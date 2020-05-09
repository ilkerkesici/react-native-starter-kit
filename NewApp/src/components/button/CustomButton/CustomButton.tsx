import React from 'react';
import { Spinner } from '../../utils';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './CustomButton.style';
import { WHITE_COLOR } from '../../../styles/Colors';

export const CustomButton = (prosp: ICustomButton) => {
    if (prosp.loading)
        return (
            <View style={styles.container}>
                <View style={styles.withSpinnerContiner}>
                    <Text style={[styles.buttonText, styles.withSpinnerButtonText]}>{prosp.name}</Text>
                </View>
                <Spinner style={{width: 20}} size={"small"} color={WHITE_COLOR} />
            </View>
        );
    return (
        <TouchableOpacity onPress={prosp.onPress} style={styles.container}>
            <Text style={styles.buttonText}> {prosp.name} </Text>
        </TouchableOpacity>
    );
}

interface ICustomButton {
    loading?: boolean,
    onPress: () => void,
    name: string
}