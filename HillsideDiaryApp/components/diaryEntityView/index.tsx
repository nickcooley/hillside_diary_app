import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Attributes, DiaryEntity, Skill, Emotion, Target } from '../../types';
import styles from './styles';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import DiaryEntityComponent from '../diaryEntity/index';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import axios from 'axios'
import moment from 'moment';
import apiConfigs from '../../global/apiConfig';
import globals from '../../global/globals';


export type EntityViewProps = {
    diaryEntity: DiaryEntity,
}

export default function DiaryEntityView(props: EntityViewProps) {
    const {diaryEntity} = props;
    const {colors} = useTheme();

    let [skills, setSkills] = useState<Skill[]>([]);
    let [emotions, setEmotions] = useState<Emotion[]>([]);
    let [targets, setTargets] = useState<Target[]>([]);
    let [readyForRender, setReadyForRender] = useState(false);

    const collectSkills = () => {
        axios({
          "method": "GET",
          "url": globals.apiCalls.skillURi,
          "headers": {
            "Authorization": apiConfigs.tempToken,
          }, "params": {
          }
        })
          .then((response) => {
            setSkills(response.data['results']);
            collectEmotions();
          })
          .catch((error) => {
            console.log(error)
          })
    }

    const collectEmotions = () => {
        axios({
          "method": "GET",
          "url": globals.apiCalls.emotionURi,
          "headers": {
            "Authorization": apiConfigs.tempToken,
          }, "params": {
          }
        })
          .then((response) => {
            setEmotions(response.data['results']);
            collectTargets();
          })
          .catch((error) => {
            console.log(error)
          })
    }

    const collectTargets = () => {
        axios({
          "method": "GET",
          "url": globals.apiCalls.targetURi,
          "headers": {
            "Authorization": apiConfigs.tempToken,
          }, "params": {
          }
        })
          .then((response) => {
            setTargets(response.data['results']);
            setReadyForRender(true);

          })
          .catch((error) => {
            console.log(error)
          })
    }
    useEffect(() => {
        collectSkills();
    }, []);

    if (readyForRender) {
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
                                        <Text style={[styles.attrName, {color: colors.background}]}>{skills.find((obj) => obj.skill_uuid = item.related_attribute_uuid)?.skill_name}</Text>
                                        <Text style={[styles.attrValue, {color: colors.background}]}>{item.rating}</Text>
                                    </View>
                                )  
                             ): 
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
                                     <Text style={[styles.attrName, {color: colors.background}]}>{emotions.find((obj) => obj.emotion_uuid = item.related_attribute_uuid)?.emotion_name}</Text>
                                     <Text style={[styles.attrValue, {color: colors.background}]}>{item.rating}</Text>
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
                                     <Text style={[styles.attrName, {color: colors.background}]}>{targets.find((obj) => obj.target_uuid = item.related_attribute_uuid)?.target_name}</Text>
                                     <Text style={[styles.attrValue, {color: colors.background}]}>{item.rating}</Text>
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
                                             <Text style={[styles.textLabel, {color: colors.background}]}>Notes</Text>
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
    } else {
        return null;
    }
}