import { StyleSheet } from 'react-native';
import { SECONDARY_COLOR, WHITE_COLOR } from '../../../../../styles/Colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
       // height: 50,
        alignSelf: 'stretch',
        //justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        minHeight: 50, 
        maxHeight: 80
    },
    textInputContainer:{
        flex: 1,
        //height: 30,
        backgroundColor: WHITE_COLOR,
        marginHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: SECONDARY_COLOR,
        minHeight: 30,
        maxHeight: 60,
        marginVertical:10
    },
    textInput:{
        alignSelf: 'stretch',
        marginHorizontal: 10
    },
    iconWrapper:{
        marginRight: 10,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
});