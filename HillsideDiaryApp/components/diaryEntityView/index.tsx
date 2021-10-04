import React from 'react';
import { View, Text } from 'react-native';
import { DiaryEntity } from '../../types';
import styles from './styles';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import DiaryEntityComponent from '../diaryEntity/index';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import skillData from '../../data/skillData';
import emotionData from '../../data/emotionData';
import targetData from '../../data/targetData';
import { useTheme } from '@react-navigation/native';
import { color } from 'react-native-elements/dist/helpers';



export type EntityViewProps = {
    diaryEntity: DiaryEntity,
}

export default function DiaryEntityView(props: EntityViewProps) {
    const {diaryEntity} = props;
    const {colors} = useTheme();

    return (
       <View>
           <Collapse>
                <CollapseHeader>
                    <TouchableWithoutFeedback>
                        <DiaryEntityComponent diaryEntity={diaryEntity}/>
                    </TouchableWithoutFeedback>                    
                </CollapseHeader>
                <CollapseBody>
                    <View style={[styles.bodyContainer, {backgroundColor: colors.primary, borderColor: colors.primary}]}>

                        <View style={[styles.detailsContainer, {backgroundColor: colors.background, borderColor: colors.background}]}>
                            <Text style={[styles.detailLabel, {color: colors.text}]}>Overview</Text>
                        </View>
                            
                        <View style={styles.labelContainer}>
                            <View style={[styles.horz, {backgroundColor: colors.background}]}/>
                            <View style={styles.attrContainer}>
                                <Text style={[styles.textLabel, {color: colors.background}]}>Skills</Text>
                            </View>
                            <View style={[styles.horz, {backgroundColor: colors.background}]}/>
                        </View>
                        {diaryEntity.skills.length > 0 ? diaryEntity.skills.map((item, index) => (
                            <View style={[styles.attrBubble, {borderColor: colors.background}]} key={index}>
                                <Text style={[styles.attrName, {color: colors.background}]}>{skillData[item.id-1].name}</Text>
                                <Text style={[styles.attrValue, {color: colors.background}]}>{item.value}</Text>
                            </View>
                        )): 
                            <View style={styles.attrNone}>
                                <Text style={[styles.attrValue, {color: colors.background}]}>None</Text>
                            </View>
                        }

                        
                        <View style={styles.labelContainer}>
                            <View style={[styles.horz, {backgroundColor: colors.background}]}/>
                            <View style={styles.attrContainer}>
                                <Text style={[styles.textLabel, {color: colors.background}]}>Emotions</Text>
                            </View>
                            <View style={[styles.horz, {backgroundColor: colors.background}]}/>
                        </View>
                        {diaryEntity.emotions.length > 0 ? diaryEntity.emotions.map((item, index) => (
                            <View style={[styles.attrBubble, {borderColor: colors.background}]} key={index}>
                                <Text style={[styles.attrName, {color: colors.background}]}>{emotionData[item.id-1].name}</Text>
                                <Text style={[styles.attrValue, {color: colors.background}]}>{item.value}</Text>
                            </View>
                        )): 
                            <View style={styles.attrNone}>
                                <Text style={[styles.attrValue, {color: colors.background}]}>None</Text>
                            </View>
                        }

                        <View style={styles.labelContainer}>
                            <View style={[styles.horz, {backgroundColor: colors.background}]}/>
                            <View style={styles.attrContainer}>
                                <Text style={[styles.textLabel, {color: colors.background}]}>Targets</Text>
                            </View>
                            <View style={[styles.horz, {backgroundColor: colors.background}]}/>
                        </View>
                        {diaryEntity.targets.length > 0 ? diaryEntity.targets.map((item, index) => (
                            <View style={[styles.attrBubble, {borderColor: colors.background}]} key={index}>
                                <Text style={[styles.attrName, {color: colors.background}]}>{targetData[item.id-1].name}</Text>
                                <Text style={[styles.attrValue, {color: colors.background}]}>{item.value}</Text>
                            </View>
                        )) : 
                            <View style={styles.attrNone}>
                                <Text style={[styles.attrValue, {color: colors.background}]}>None</Text>
                            </View>
                        }

                        {diaryEntity.note.length > 0 ? 
                            <View>
                                <View style={styles.labelContainer}>
                                    <View style={[styles.horz, {backgroundColor: colors.background}]}/>
                                    <View style={styles.attrContainer}>
                                        <Text style={styles.textLabel}>Notes</Text>
                                    </View>
                                    <View style={[styles.horz, {backgroundColor: colors.background}]}/>
                                </View>
                                <View style={styles.noteContainer}>
                                    <Text style={styles.noteContent}>{diaryEntity.note}</Text>
                                </View>
                            </View>
                            
                            : <View></View>
                        }

                    </View>
                </CollapseBody>
            </Collapse>
       </View>
    )
}