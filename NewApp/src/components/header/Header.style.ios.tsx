import {StyleSheet} from 'react-native';
import { PRIMARY_COLOR, WHITE_COLOR, LIGHT_GRAY } from '../../styles/Colors';

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 60,
        backgroundColor: PRIMARY_COLOR
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16,
        color: WHITE_COLOR
    },
    instance:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    iconWrapper:{
        alignSelf: 'stretch',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subTitle: {
        fontSize: 12,
        marginTop: 2,
        color: LIGHT_GRAY,
        marginBottom: 2
    }
})