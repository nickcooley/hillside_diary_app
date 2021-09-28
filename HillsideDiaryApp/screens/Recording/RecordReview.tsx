import * as React from "react";
import { Dimensions, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Text, View } from "../../components/Themed";
import { RecordingStackScreenProps } from "../../types";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import globals from "../../global/globals";
import skillData from "../../data/skillData";
import emotionData from "../../data/emotionData";
import targetData from "../../data/targetData";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import entitiesData from "../../data/entitiesData";
import { useTheme } from "@react-navigation/native";
import useColorScheme from '../../hooks/useColorScheme';

export default function RecordReview({ navigation }: RecordingStackScreenProps<"RecordReview">) {

    const {colors} = useTheme();
    const light = useColorScheme();

    const emotionIcon = ['emoticon-cry-outline', 'emoticon-frown-outline', 'emoticon-confused-outline', 'emoticon-neutral-outline', 'emoticon-happy-outline', 'emoticon-outline', 'emoticon-excited-outline'] as any[];

    return (
        <View style={{flex: 1}}>
            <ScrollView style={{ backgroundColor: colors.background }}>
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
                                style={[styles.icon, {color: colors.text}]}
                            ></Ionicons>
                        </TouchableWithoutFeedback>
                        <Text style={[styles.titleBar, {color: colors.text}]}>Back</Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={[styles.title, {color: colors.primary}]}>Your Log</Text>
                        <Text style={[styles.subtitle, {color: light ? 'gray' : 'lightgray'}]}>Please review before submission</Text>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.labelContainer}>
                            <View style={[styles.horz, {backgroundColor: colors.text}]} />
                            <View style={styles.attrContainer}>
                                <Text style={[styles.textLabel, {color: colors.text}]}>Date / Time</Text>
                            </View>
                            <View style={[styles.horz, {backgroundColor: colors.text}]} />
                        </View>

                        <View style={styles.dateRow}>
                            <Text style={[styles.dateLabel, {color: colors.primary}]}>{globals.DiaryLog.date}</Text>
                            <Text style={[styles.timeLabel, {color: colors.text}]}>{globals.DiaryLog.time}</Text>
                        </View>

                        <View style={styles.labelContainer}>
                            <View style={[styles.horz, {backgroundColor: colors.text}]} />
                            <View style={styles.attrContainer}>
                                <Text style={[styles.textLabel, {color: colors.text}]}>SUD Score</Text>
                            </View>
                            <View style={[styles.horz, {backgroundColor: colors.text}]} />
                        </View>

                        <View style={styles.sudRow}>
                            <MaterialCommunityIcons
                                name={emotionIcon[globals.DiaryLog.sudScore]}
                                size={80}
                                color={colors.primary}
                            />
                            <Text style={[styles.sudLabel, {color: colors.text}]}>{globals.DiaryLog.sudScore}</Text>
                        </View>

                        <View style={styles.labelContainer}>
                            <View style={[styles.horz, {backgroundColor: colors.text}]} />
                            <View style={styles.attrContainer}>
                                <Text style={[styles.textLabel, {color: colors.text}]}>Skills</Text>
                            </View>
                            <View style={[styles.horz, {backgroundColor: colors.text}]} />
                        </View>
                        {globals.DiaryLog.skills.length > 0 ? (
                            globals.DiaryLog.skills.map((item, index) => (
                                <View style={[styles.attrBubble, {borderColor: colors.primary, backgroundColor: colors.primary}]} key={index}>
                                    <Text style={[styles.attrStyle, {color: colors.background}]}>
                                        {skillData[item.id - 1].name}
                                    </Text>
                                    <Text style={[styles.attrStyle, {color: colors.background}]}>{item.value}</Text>
                                </View>
                            ))
                        ) : (
                                <Text style={{color: colors.text}}>None</Text>
                            )}

                        <View style={styles.labelContainer}>
                            <View style={[styles.horz, {backgroundColor: colors.text}]} />
                            <View style={styles.attrContainer}>
                                <Text style={[styles.textLabel, {color: colors.text}]}>Emotions</Text>
                            </View>
                            <View style={[styles.horz, {backgroundColor: colors.text}]} />
                        </View>
                        {globals.DiaryLog.emotions.length > 0 ? (
                            globals.DiaryLog.emotions.map((item, index) => (
                                <View style={[styles.attrBubble, {borderColor: colors.primary, backgroundColor: colors.primary}]} key={index}>
                                    <Text style={[styles.attrStyle, {color: colors.background}]}>
                                        {emotionData[item.id - 1].name}
                                    </Text>
                                    <Text style={[styles.attrStyle, {color: colors.background}]}>{item.value}</Text>
                                </View>
                            ))
                        ) : (
                                <Text style={{color: colors.text}}>None</Text>
                            )}

                        <View style={styles.labelContainer}>
                            <View style={[styles.horz, {backgroundColor: colors.text}]} />
                            <View style={styles.attrContainer}>
                                <Text style={[styles.textLabel, {color: colors.text}]}>Targets</Text>
                            </View>
                            <View style={[styles.horz, {backgroundColor: colors.text}]} />
                        </View>
                        {globals.DiaryLog.targets.length > 0 ? (
                            globals.DiaryLog.targets.map((item, index) => (
                                <View style={[styles.attrBubble, {borderColor: colors.primary, backgroundColor: colors.primary}]} key={index}>
                                    <Text style={[styles.attrStyle, {color: colors.background}]}>
                                        {targetData[item.id - 1].name}
                                    </Text>
                                    <Text style={[styles.attrStyle, {color: colors.background}]}>{item.value}</Text>
                                </View>
                            ))
                        ) : (
                                <Text style={{color: colors.text}}>None</Text>
                            )}

                        {globals.DiaryLog.note.length > 0 ? (
                            <View>
                                <View style={styles.labelContainer}>
                                    <View style={[styles.horz, {backgroundColor: colors.text}]} />
                                    <View style={styles.attrContainer}>
                                        <Text style={[styles.textLabel, {color: colors.text}]}>Notes</Text>
                                    </View>
                                    <View style={[styles.horz, {backgroundColor: colors.text}]} />
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
        paddingVertical: 15,
    },
    subtitle: {
        fontSize: 18,
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
    },
    sudRow: {
        width: "100%",
        flexDirection: "row",
        marginVertical: 3,
        paddingHorizontal: 5,
        justifyContent: "center",
        alignItems: "center",
    },
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
        fontWeight: '500'
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
