import * as React from "react";
import { Dimensions, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Text, View } from "../../components/Themed";
import { RecordingStackScreenProps } from "../../types";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import globals from "../../global/globals";
import skillData from "../../data/skillData";
import emotionData from "../../data/emotionData";
import targetData from "../../data/targetData";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import entitiesData from "../../data/entitiesData";

export default function RecordReview({
    navigation,
}: RecordingStackScreenProps<"RecordReview">) {
    const emotionIcon = [
        "emoticon-cry-outline",
        "emoticon-frown-outline",
        "emoticon-confused-outline",
        "emoticon-neutral-outline",
        "emoticon-happy-outline",
        "emoticon-outline",
        "emoticon-excited-outline",
    ];

    return (
        <View style={{flex: 1}}>
            <ScrollView style={{ backgroundColor: "white" }}>
                <View style={styles.container}>
                    <View style={styles.headerBar}>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                navigation.goBack();
                            }}
                        >
                            <Ionicons
                                name="arrow-back-sharp"
                                size={40}
                                style={styles.icon}
                            ></Ionicons>
                        </TouchableWithoutFeedback>
                        <Text style={styles.titleBar}>Back</Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.title}>Your Log</Text>
                        <Text style={styles.subtitle}>Please review before submission</Text>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.labelContainer}>
                            <View style={styles.horz} />
                            <View style={styles.attrContainer}>
                                <Text style={styles.textLabel}>Date / Time</Text>
                            </View>
                            <View style={styles.horz} />
                        </View>

                        <View style={styles.dateRow}>
                            <Text style={styles.dateLabel}>{globals.DiaryLog.date}</Text>
                            <Text style={styles.timeLabel}>{globals.DiaryLog.time}</Text>
                        </View>

                        <View style={styles.labelContainer}>
                            <View style={styles.horz} />
                            <View style={styles.attrContainer}>
                                <Text style={styles.textLabel}>SUD Score</Text>
                            </View>
                            <View style={styles.horz} />
                        </View>

                        <View style={styles.sudRow}>
                            <MaterialCommunityIcons
                                name={emotionIcon[globals.DiaryLog.sudScore]}
                                size={80}
                                color={Colors.light.primary}
                            />
                            <Text style={styles.sudLabel}>{globals.DiaryLog.sudScore}</Text>
                        </View>

                        <View style={styles.labelContainer}>
                            <View style={styles.horz} />
                            <View style={styles.attrContainer}>
                                <Text style={styles.textLabel}>Skills</Text>
                            </View>
                            <View style={styles.horz} />
                        </View>
                        {globals.DiaryLog.skills.length > 0 ? (
                            globals.DiaryLog.skills.map((item, index) => (
                                <View style={styles.attrBubble} key={index}>
                                    <Text style={styles.attrStyle}>
                                        {skillData[item.id - 1].name}
                                    </Text>
                                    <Text style={styles.attrStyle}>{item.value}</Text>
                                </View>
                            ))
                        ) : (
                                <Text>None</Text>
                            )}

                        <View style={styles.labelContainer}>
                            <View style={styles.horz} />
                            <View style={styles.attrContainer}>
                                <Text style={styles.textLabel}>Emotions</Text>
                            </View>
                            <View style={styles.horz} />
                        </View>
                        {globals.DiaryLog.emotions.length > 0 ? (
                            globals.DiaryLog.emotions.map((item, index) => (
                                <View style={styles.attrBubble} key={index}>
                                    <Text style={styles.attrStyle}>
                                        {emotionData[item.id - 1].name}
                                    </Text>
                                    <Text style={styles.attrStyle}>{item.value}</Text>
                                </View>
                            ))
                        ) : (
                                <Text>None</Text>
                            )}

                        <View style={styles.labelContainer}>
                            <View style={styles.horz} />
                            <View style={styles.attrContainer}>
                                <Text style={styles.textLabel}>Targets</Text>
                            </View>
                            <View style={styles.horz} />
                        </View>
                        {globals.DiaryLog.targets.length > 0 ? (
                            globals.DiaryLog.targets.map((item, index) => (
                                <View style={styles.attrBubble} key={index}>
                                    <Text style={styles.attrStyle}>
                                        {targetData[item.id - 1].name}
                                    </Text>
                                    <Text style={styles.attrStyle}>{item.value}</Text>
                                </View>
                            ))
                        ) : (
                                <Text>None</Text>
                            )}

                        {globals.DiaryLog.note.length > 0 ? (
                            <View>
                                <View style={styles.labelContainer}>
                                    <View style={styles.horz} />
                                    <View style={styles.attrContainer}>
                                        <Text style={styles.textLabel}>Notes</Text>
                                    </View>
                                    <View style={styles.horz} />
                                </View>
                                <View style={styles.noteContainer}>
                                    <Text>{globals.DiaryLog.note}</Text>
                                </View>
                            </View>
                        ) : (
                                <View></View>
                            )}

                        <View style={styles.buttonContainer}>
                            <Button
                                style={styles.button}
                                title="Confirm"
                                onPress={() => {
                                    entitiesData.push(globals.DiaryLog);
                                    navigation.navigate("RecordConfirmation");
                                }}
                            />
                        </View>

                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: Dimensions.get("screen").height / 10,
    },
    headerBar: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    header: {
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 20,
    },
    body: {
        width: "90%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    titleBar: {
        fontSize: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: Colors.light.primary,
        paddingVertical: 15,
    },
    subtitle: {
        fontSize: 18,
        color: "gray",
    },
    icon: {
        paddingLeft: 20,
    },
    labelContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    horz: {
        flex: 1,
        height: 1,
        backgroundColor: "black",
    },
    textLabel: {
        marginHorizontal: 5,
        fontWeight: "bold",
    },
    dateRow: {
        width: "100%",
        flexDirection: "row",
        marginVertical: 3,
        paddingHorizontal: 5,
        paddingVertical: 15,
        justifyContent: "space-between",
        alignItems: "center",
    },
    dateLabel: {
        fontSize: 22,
        fontWeight: "bold",
        color: Colors.light.primary,
    },
    sudRow: {
        width: "100%",
        flexDirection: "row",
        marginVertical: 3,
        paddingHorizontal: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    moodIcon: {},
    sudLabel: {
        fontSize: 30,
        fontWeight: "bold",
    },
    timeLabel: {
        fontSize: 20,
    },
    attrContainer: {
        paddingVertical: 10,
        alignItems: "center",
    },
    attrBubble: {
        width: "100%",
        flexDirection: "row",
        marginVertical: 3,
        paddingHorizontal: 5,
        justifyContent: "space-between",
        borderWidth: 1,
        borderRadius: 4,
    },
    attrStyle: {
        paddingHorizontal: 10,
        fontSize: 16,
    },
    noteContainer: {
        width: Dimensions.get("screen").width - 40,
        padding: 10,
        backgroundColor: "lightgray",
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingVertical: 20,
        width: Dimensions.get('screen').width - 30
    },
    button: {
        paddingVertical: 20,
        width: Dimensions.get("screen").width - 30,
    },
});
