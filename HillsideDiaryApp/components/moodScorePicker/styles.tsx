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
    title: {
        fontSize: 24
    },
    sliderContainer: {
        alignItems: 'stretch'
    }
})

export default styles