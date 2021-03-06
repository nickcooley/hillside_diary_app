import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    rightSide: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingLeft: Dimensions.get('screen').width / 20
    },
    title: {
        fontSize: 18,
    },
    value: {
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: 20
    },
})

export default styles