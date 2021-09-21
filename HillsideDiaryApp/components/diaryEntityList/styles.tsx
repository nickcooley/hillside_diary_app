import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    datePickerContainer: {
        flexDirection: 'row',
        paddingBottom: 20,
        justifyContent: 'center'
    },
    datePickerIcon: {
        color: Colors.light.primary,
    }, 
    datePickerText: {
        fontSize: 25,
        color: Colors.light.primary,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
})

export default styles