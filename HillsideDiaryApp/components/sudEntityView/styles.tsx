import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    sudEnties: {
        width: '100%',
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        margin: 10,
        padding: 10,
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
    },
    scoreBubble: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 2,
        marginHorizontal: 15,
        height: Dimensions.get('screen').height / 15,
        width: Dimensions.get('screen').width / 7
    },
    bubbleText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18
    }
})

export default styles