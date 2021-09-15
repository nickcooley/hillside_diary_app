import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    emotionTitle: {
        fontSize: 28,
        paddingVertical: 15,
    },
    button: {
        width: Dimensions.get('screen').width - 30,
        paddingTop: 20,
        paddingBottom: 80
    },
})

export default styles