import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../../styles/Colors';

export const styles = StyleSheet.create({
    container:{
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: WHITE_COLOR,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
});