import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {},
    inputContainer: {
        width: '100%',
        padding: 20,
        backgroundColor: 'lightgray',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingVertical: 15,
    },
    txtInput: {
        height: Dimensions.get('screen').height / 4
    }
    
})

export default styles