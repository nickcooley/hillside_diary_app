import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { useTheme } from '@react-navigation/native';
import {DiaryEntity} from '../../types';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import useColorScheme from '../../hooks/useColorScheme';

export type DiaryEntityProps = {
    diaryEntity: DiaryEntity,
}

const DiaryEntityComponent = (props: DiaryEntityProps) => {
    const {diaryEntity} = props;
    const dark = useColorScheme();
    const {colors} = useTheme();

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] as any[];
    const emotionIcon = ['emoticon-cry-outline', 'emoticon-frown-outline', 'emoticon-confused-outline', 'emoticon-neutral-outline', 'emoticon-happy-outline', 'emoticon-outline', 'emoticon-excited-outline'] as any[];
    const includedNote = diaryEntity.note.length > 0 ? true : false;

    return (
        <View style={styles.diaryEnties}>
            <View style={[styles.container, {backgroundColor: colors.background, borderColor: colors.primary}]}>
                <View style={styles.dateContainer}>
                    <Text style={[styles.date, {color: colors.text}]}>{monthNames[diaryEntity.month-1]} {diaryEntity.day}, {diaryEntity.year}</Text>
                    <View style={styles.timeContainer}>
                        {includedNote ? <FontAwesome name={'sticky-note-o'} size={20} color={colors.primary}/> : <View />}
                        <Text style={[styles.time, {color: 'gray'}]}>{diaryEntity.time}</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.sudContainer}>
                        <MaterialCommunityIcons name={emotionIcon[diaryEntity.moodScore]} size={80} color={colors.primary} style={{justifyContent:'center'}}/>
                    </View>
                    <View style={styles.attrContainer}>
                        <View style={[styles.singleAttrContainer, {borderColor: colors.primary, backgroundColor: colors.primary}]}>
                            <Text style={styles.labelofAttr}>Skills</Text>
                            <View style={styles.borderContainer}>
                                <Text style={styles.numOfAttr}>{diaryEntity.skills.length}</Text>
                            </View>
                        </View>
                        <View style={[styles.singleAttrContainer, {borderColor: colors.primary, backgroundColor: colors.primary}]}>
                            <Text style={styles.labelofAttr}>Emotions</Text>
                            <View style={styles.borderContainer}>
                                <Text style={styles.numOfAttr}>{diaryEntity.emotions.length}</Text>
                            </View>
                        </View>
                        <View style={[styles.singleAttrContainer, {borderColor: colors.primary, backgroundColor: colors.primary}]}>
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