import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    diaryEnties: {
        width: '100%',
        flex: 1
    },
    container: {
        width: '95%',
        margin: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 2,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center'
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    date: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22,
    },
    time: {
        color: 'gray',
        fontSize: 18,
        paddingLeft: 10,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 10,
    },
    sudContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    sudScore: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    attrContainer: {
        flexDirection: 'column',
        paddingLeft: 10,
    },
    singleAttrContainer: {
        width: 120,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 8,
        justifyContent: 'space-between'
    },
    labelofAttr: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 5,
    },
    borderContainer: {
        borderLeftWidth: 1,
        width: 30,

    },
    numOfAttr: {
        fontSize: 14,
        alignItems: 'center',
        textAlign: 'center',

    },
})

export default styles