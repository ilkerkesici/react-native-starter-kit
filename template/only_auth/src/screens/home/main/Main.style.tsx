import { StyleSheet, Dimensions } from 'react-native';
import { BACKGROUND_COLOR, WHITE_COLOR } from '../../../styles/Colors';
const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
    },
    translationCardsContainer:{
        marginTop: 20,
        marginHorizontal: 10,
        height: height * 0.5,
        borderRadius: 10,
        backgroundColor: WHITE_COLOR,
        //flex: 0.6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    buttonContiner:{
        alignSelf: 'stretch',
        alignItems: 'center',
        marginBottom: -20,
        zIndex: 1
    }
    
    
});