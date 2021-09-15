import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bodyContainer: {
        marginTop: -12,
        width: '95%',
        flexDirection: 'column',
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 3,
        paddingBottom: 10
    },
    labelContainer: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    horz: {
        flex: 1, 
        height: 1, 
        backgroundColor: 'black'
    },
    textLabel: {
        marginHorizontal: 5,
        fontWeight: 'bold',
        flex: 1
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
        borderRadius: 4
    },
    attrName: {
        paddingHorizontal: 10,
    },
    attrValue: {
        paddingRight: 10
    },
    noteContainer: {
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: 'lightgray'
    },
    noteContent: {
        
    }
})

export default styles