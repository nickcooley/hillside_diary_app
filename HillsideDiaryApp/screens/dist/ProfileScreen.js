"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
var Themed_1 = require("../components/Themed");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var native_1 = require("@react-navigation/native");
var Button_1 = require("react-native-elements/dist/buttons/Button");
function ProfileScreen() {
    var colors = native_1.useTheme().colors;
    return (React.createElement(react_native_safe_area_context_1.SafeAreaView, { style: [styles.container, { backgroundColor: colors.primary }] },
        React.createElement(Themed_1.Text, { style: styles.welcomeMsg }, "Welcome"),
        React.createElement(Themed_1.View, { style: styles.profileContainer },
            React.createElement(Themed_1.View, { style: styles.profileRow },
                React.createElement(Themed_1.View, { style: styles.iconContainer },
                    React.createElement(vector_icons_1.MaterialCommunityIcons, { name: 'face-profile', size: 100 })),
                React.createElement(Themed_1.View, { style: { paddingHorizontal: 15 } }),
                React.createElement(Themed_1.View, { style: styles.piContainer },
                    React.createElement(Themed_1.Text, { style: styles.fName }, "John"),
                    React.createElement(Themed_1.Text, { style: styles.lName }, "Smith")))),
        React.createElement(Themed_1.View, { style: styles.infoContainer },
            React.createElement(Themed_1.View, null,
                React.createElement(Themed_1.View, { style: styles.labelContainer },
                    React.createElement(Themed_1.View, { style: [styles.horz] }),
                    React.createElement(Themed_1.View, { style: styles.attrContainer },
                        React.createElement(Themed_1.Text, { style: [styles.textLabel] }, "Name")),
                    React.createElement(Themed_1.View, { style: [styles.horz] })),
                React.createElement(Themed_1.View, null,
                    React.createElement(Themed_1.Text, { style: { textAlign: 'center', color: 'gray' } }, "John Smith"))),
            React.createElement(Themed_1.View, null,
                React.createElement(Themed_1.View, { style: styles.labelContainer },
                    React.createElement(Themed_1.View, { style: [styles.horz] }),
                    React.createElement(Themed_1.View, { style: styles.attrContainer },
                        React.createElement(Themed_1.Text, { style: [styles.textLabel] }, "Email")),
                    React.createElement(Themed_1.View, { style: [styles.horz] })),
                React.createElement(Themed_1.View, null,
                    React.createElement(Themed_1.Text, { style: { textAlign: 'center', color: 'gray' } }, "example@hotmail.com"))),
            React.createElement(Themed_1.View, null,
                React.createElement(Themed_1.View, { style: styles.labelContainer },
                    React.createElement(Themed_1.View, { style: [styles.horz] }),
                    React.createElement(Themed_1.View, { style: styles.attrContainer },
                        React.createElement(Themed_1.Text, { style: [styles.textLabel] }, "Phone")),
                    React.createElement(Themed_1.View, { style: [styles.horz] })),
                React.createElement(Themed_1.View, null,
                    React.createElement(Themed_1.Text, { style: { textAlign: 'center', color: 'gray' } }, "(516) 555-5555")))),
        React.createElement(Themed_1.View, { style: styles.buttonContainer },
            React.createElement(Button_1.Button, { title: '33', style: styles.button }),
            React.createElement(Button_1.Button, { title: '33', style: styles.button }))));
}
exports["default"] = ProfileScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingTop: 30
    },
    welcomeMsg: {
        color: 'white',
        fontSize: 35,
        fontWeight: '600',
        paddingLeft: 20,
        paddingBottom: 10
    },
    profileContainer: {
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'white'
    },
    profileRow: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20
    },
    iconContainer: {
        paddingLeft: 10
    },
    piContainer: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    fName: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    lName: {
        fontSize: 20,
        color: 'gray'
    },
    infoContainer: {
        marginVertical: 20,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: 10
    },
    horz: {
        flex: 1,
        height: 1,
        backgroundColor: 'black'
    },
    attrContainer: {
        paddingVertical: 10,
        alignItems: "center"
    },
    textLabel: {
        marginHorizontal: 5,
        fontWeight: "bold",
        color: 'black'
    },
    labelContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: '90%'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: 'black',
        width: '100%'
    }
});
