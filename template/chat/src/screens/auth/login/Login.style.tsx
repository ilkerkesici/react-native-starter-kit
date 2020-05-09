import { StyleSheet } from 'react-native';
import { WHITE_COLOR, SECONDARY_DARK_COLOR, PRIMARY_DARK_COLOR } from '../../../styles/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoContainer: {
        alignSelf: 'stretch',
        justifyContent :'center',
        alignItems: 'center',
        marginTop: 30
    },
    form: {
        marginHorizontal: 10,
        marginTop: 30
    },
    footer:{
        bottom: 0,
        alignSelf: 'stretch',
        backgroundColor: WHITE_COLOR,
        marginHorizontal: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: SECONDARY_DARK_COLOR,
        borderTopWidth: 1,
    },
    text: {
        color: SECONDARY_DARK_COLOR,
        fontSize: 14,
    },
    buttonText:{
        color: PRIMARY_DARK_COLOR,
        fontSize: 14,
        fontWeight: 'bold'
    },
    flexFill: {
        flex: 1
    },
});