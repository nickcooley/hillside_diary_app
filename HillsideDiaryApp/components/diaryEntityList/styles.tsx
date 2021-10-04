import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingBottom: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40
    },
    datePickerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,

    },
    datePickerText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
})

export default styles