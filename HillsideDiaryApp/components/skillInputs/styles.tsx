import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginBottom: Dimensions.get('screen').width / 8,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingVertical: 15,
    },
    button: {
        width: Dimensions.get('screen').width - 30,
        paddingTop: 20,
        paddingBottom: 80
    },
})

export default styles