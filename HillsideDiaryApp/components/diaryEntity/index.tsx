import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { useLinkTo, useNavigation } from '@react-navigation/native';
import {DiaryEntity} from '../../types';
import { MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

export type DiaryEntityProps = {
    diaryEntity: DiaryEntity,
}

const DiaryEntityComponent = (props: DiaryEntityProps) => {
    const {diaryEntity} = props;

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const emotionIcon = ['emoticon-cry-outline', 'emoticon-frown-outline', 'emoticon-confused-outline', 'emoticon-neutral-outline', 'emoticon-happy-outline', 'emoticon-outline', 'emoticon-excited-outline'];
    const includedNote = diaryEntity.note.length > 0 ? true : false;

    return (
        <View style={styles.diaryEnties}>
            <View style={styles.container}>
                <View style={styles.dateContainer}>
                    <Text style={styles.date}>{monthNames[diaryEntity.month]} {diaryEntity.day}, {diaryEntity.year}</Text>
                    <View style={styles.timeContainer}>
                        {includedNote ? <FontAwesome name={'sticky-note-o'} size={20}/> : <View />}
                        <Text style={styles.time}>{diaryEntity.time}</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.sudContainer}>
                        <MaterialCommunityIcons name={emotionIcon[diaryEntity.sudScore]} size={75}/>
                        <Text style={styles.sudScore}>{diaryEntity.sudScore}</Text>
                    </View>
                    <View style={styles.attrContainer}>
                        <View style={styles.singleAttrContainer}>
                            <Text style={styles.labelofAttr}>Skills</Text>
                            <View style={styles.borderContainer}>
                                <Text style={styles.numOfAttr}>{diaryEntity.skills.length}</Text>
                            </View>
                        </View>
                        <View style={styles.singleAttrContainer}>
                            <Text style={styles.labelofAttr}>Emotions</Text>
                            <View style={styles.borderContainer}>
                                <Text style={styles.numOfAttr}>{diaryEntity.emotions.length}</Text>
                            </View>
                        </View>
                        <View style={styles.singleAttrContainer}>
                            <Text style={styles.labelofAttr}>Targets</Text>
                            <View style={styles.borderContainer}>
                                <Text style={styles.numOfAttr}>{diaryEntity.targets.length}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DiaryEntityComponent;