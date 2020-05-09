import {StyleSheet} from 'react-native';
import { PRIMARY_COLOR, WHITE_COLOR, LIGHT_GRAY } from '../../styles/Colors';

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 50,
        backgroundColor: PRIMARY_COLOR
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: 10
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16,
        color: WHITE_COLOR
    },
    instance:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10
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