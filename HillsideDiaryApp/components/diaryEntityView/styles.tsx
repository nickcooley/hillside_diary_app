import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bodyContainer: {
        marginTop: -20,
        width: '95%',
        flexDirection: 'column',
        alignSelf: 'center',
        borderTopWidth: 0,
        borderWidth: 2,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        paddingBottom: 10,
    },
    labelContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    detailsContainer: {
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center',
        marginHorizontal: 20,
        borderWidth: 2,
        borderRadius: 20,
    },
    detailLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    horz: {
        flex: 1, 
        height: 1, 
    },
    textLabel: {
        marginHorizontal: 5,
        fontWeight: 'bold',
        flex: 1,
    },
    attrNone: {
        flexDirection: 'row',
        marginVertical: 3,
        paddingHorizontal: 5,
        justifyContent: 'center',
    },
    attrContainer: {
        paddingVertical: 10,
        alignItems: 'center'
    },
    attrBubble: {
        width: '60%',
        flexDirection: 'row',
        marginLeft: 30,
        marginVertical: 3,
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 4,
    },
    attrName: {
        paddingHorizontal: 10,
        fontWeight: '600',
    },
    attrValue: {
        paddingRight: 10,
        fontWeight: '400',
    },
    noteContainer: {
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: 'lightgray'
    },
    noteContent: {}
})

export default styles