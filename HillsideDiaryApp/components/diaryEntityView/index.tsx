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



export type EntityViewProps = {
    diaryEntity: DiaryEntity,
}

const DiaryEntityView = (props: EntityViewProps) => {
    const {diaryEntity} = props;

    return (
       <View>
           <Collapse>
                <CollapseHeader>
                    <TouchableWithoutFeedback>
                        <DiaryEntityComponent diaryEntity={diaryEntity}/>
                    </TouchableWithoutFeedback>                    
                </CollapseHeader>
                <CollapseBody>
                    <View style={styles.bodyContainer}>
                        
                        <View style={styles.labelContainer}>
                            <View style={styles.horz}/>
                            <View style={styles.attrContainer}>
                                <Text style={styles.textLabel}>Skills</Text>
                            </View>
                            <View style={styles.horz}/>
                        </View>
                        {diaryEntity.skills.map((item, index) => (
                            <View style={styles.attrBubble} key={index}>
                                <Text style={styles.attrName}>{skillData[item.id].name}</Text>
                                <Text style={styles.attrValue}>{item.value}</Text>
                            </View>
                        ))}

                        
                        <View style={styles.labelContainer}>
                            <View style={styles.horz}/>
                            <View style={styles.attrContainer}>
                                <Text style={styles.textLabel}>Emotions</Text>
                            </View>
                            <View style={styles.horz}/>
                        </View>
                        {diaryEntity.emotions.map((item, index) => (
                            <View style={styles.attrBubble} key={index}>
                                <Text style={styles.attrName}>{emotionData[item.id].name}</Text>
                                <Text style={styles.attrValue}>{item.value}</Text>
                            </View>
                        ))}

                        <View style={styles.labelContainer}>
                            <View style={styles.horz}/>
                            <View style={styles.attrContainer}>
                                <Text style={styles.textLabel}>Targets</Text>
                            </View>
                            <View style={styles.horz}/>
                        </View>
                        {diaryEntity.targets.map((item, index) => (
                            <View style={styles.attrBubble} key={index}>
                                <Text style={styles.attrName}>{targetData[item.id].name}</Text>
                                <Text style={styles.attrValue}>{item.value}</Text>
                            </View>
                        ))}

                        {diaryEntity.note.length > 0 ? 
                            <View>
                                <View style={styles.labelContainer}>
                                    <View style={styles.horz}/>
                                    <View style={styles.attrContainer}>
                                        <Text style={styles.textLabel}>Notes</Text>
                                    </View>
                                    <View style={styles.horz}/>
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

export default DiaryEntityView;