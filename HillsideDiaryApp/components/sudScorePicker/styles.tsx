import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: Dimensions.get('screen').height / 25
    },
    iconContainer: {
        paddingVertical: 20
    },
    score: {
        color: 'white',
        fontSize: 60,
    },
    scoreContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        borderRadius: 100,
        borderWidth: 2,
        marginHorizontal: 15,
        height: Dimensions.get('screen').height / 9,
        width: Dimensions.get('screen').width / 4,
    },
    title: {
        paddingHorizontal: 10,
        fontSize: 20,
    },
    sliderContainer: {
        alignItems: 'stretch'
    }
})

export default styles