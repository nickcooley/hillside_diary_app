import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.light.primary,
        paddingVertical: 15,
    },
    button: {
        width: Dimensions.get('screen').width - 30,
        paddingTop: 20,
        paddingBottom: 80
    },
})

export default styles