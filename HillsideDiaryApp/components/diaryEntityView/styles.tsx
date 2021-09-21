import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    bodyContainer: {
        marginTop: -12,
        width: '94%',
        flexDirection: 'column',
        alignSelf: 'center',
        backgroundColor: Colors.light.primary,
        borderTopWidth: 0,
        borderWidth: 2,
        borderRadius: 3,
        paddingBottom: 10,
    },
    labelContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    detailsContainer: {
        paddingVertical: 15,
        alignItems: 'flex-start',
        paddingHorizontal: 20,
    },
    detailLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    horz: {
        flex: 1, 
        height: 1, 
        backgroundColor: 'white'
    },
    textLabel: {
        marginHorizontal: 5,
        fontWeight: 'bold',
        flex: 1,
        color: 'white'
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
        borderColor: 'white'
    },
    attrName: {
        paddingHorizontal: 10,
        fontWeight: '600',
        color: 'white'
    },
    attrValue: {
        paddingRight: 10,
        fontWeight: '400',
        color: 'white'
    },
    noteContainer: {
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: 'lightgray'
    },
    noteContent: {}
})

export default styles