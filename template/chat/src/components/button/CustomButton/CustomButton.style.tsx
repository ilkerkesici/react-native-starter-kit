import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../../styles/Colors';

export const styles = StyleSheet.create({
    container:{
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: PRIMARY_COLOR,
        padding: 10,
        flexDirection: 'row',
        marginVertical: 10
    },
    buttonText:{
        color: WHITE_COLOR,
        fontSize: 16,
        marginHorizontal: 5,
    },
    withSpinnerContiner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    withSpinnerButtonText: {
        marginRight: -15
    }
});