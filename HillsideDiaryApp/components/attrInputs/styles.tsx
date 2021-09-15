import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    rightSide: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingLeft: Dimensions.get('screen').width / 8
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    value: {
        fontSize: 12,
        paddingLeft: 20
    },
})

export default styles