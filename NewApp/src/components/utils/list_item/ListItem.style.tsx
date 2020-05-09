import {StyleSheet} from 'react-native';
import { BLACK_COLOR, PRIMARY_LIGHT_COLOR, SECONDARY_LIGHT_COLOR, LIGHT_GRAY } from '../../../styles/Colors';

export const styles = StyleSheet.create({
    container:{
        alignSelf:'stretch',
        padding: 5,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    title: {
        color: BLACK_COLOR,
        fontSize: 16,
    },
    body:{
        borderBottomColor: SECONDARY_LIGHT_COLOR,
        borderBottomWidth: 0.5,
        alignSelf: 'stretch',
        justifyContent: 'center',
        flex: 1
    },
    avatarContainer:{
        height: 40, 
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 15
    },
    subtitle:{
        color: SECONDARY_LIGHT_COLOR,
        fontSize: 14,
        marginTop: 2,
        marginBottom: 2
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'red'
    },
    dotContaienr:{
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 14
    }

})