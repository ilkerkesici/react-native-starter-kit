import {StyleSheet} from 'react-native';
import { PRIMARY_LIGHT_COLOR, LIGHT_GRAY } from '../../../../../../../styles/Colors';

export const styles = StyleSheet.create({
    container:{
        alignSelf: 'stretch',
        marginVertical: 5,
        marginHorizontal: 10,
    },
    containerMy:{
        alignItems: 'flex-end',
    },
    containerOther:{
        alignItems: 'flex-start'
    },
    myBaloon:{
        padding: 10,
        backgroundColor: PRIMARY_LIGHT_COLOR,
        maxWidth: "70%",
        borderRadius: 5
    },
    text:{
        fontSize: 16
    },
    timeText:{
        fontSize: 12
    },
    myTimeContiner:{
        alignSelf: 'stretch',
        alignItems: 'flex-end'
    },
    otherBaloon: {
        backgroundColor: LIGHT_GRAY,
        maxWidth: "70%",
        borderRadius: 5,
        padding: 10,
    },
    otherTimeContiner:{
        alignSelf: 'stretch',
        alignItems: 'flex-start'
    },
});
