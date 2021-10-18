import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Slider } from 'react-native-elements';
import globals from '../../global/globals';
import styles from './styles';
import { Skill, Emotion, Target, Attribute } from '../../types';
import { useTheme } from '@react-navigation/native';
import moment from 'moment';

export type AttrProps = {
    name: string,
    uId: string,
    type: string,
    value: number
}



const AttrInputs = (props: AttrProps) => {

    const {colors} = useTheme();

    const updatelocalAttr=(newAttr: Attribute)=>{
        switch (newAttr.type){
            case 'Skill':
                if (globals.DiaryLog.skills.some((item: Attribute) => item.related_attribute_uuid === newAttr.related_attribute_uuid)){
                        const result = globals.DiaryLog.skills.filter((item: Attribute) => item.related_attribute_uuid == newAttr.related_attribute_uuid)
                        if (result[0]){
                            result[0] = newAttr;
                        }
                }else{
                    globals.DiaryLog.skills.push(newAttr);
                }
                break;
            case 'Emotion':
                if (globals.DiaryLog.emotions.some((item: Attribute) => item.related_attribute_uuid === newAttr.related_attribute_uuid)){
                    const result = globals.DiaryLog.emotions.filter((item: Attribute) => item.related_attribute_uuid == newAttr.related_attribute_uuid);
                    if (result[0]){
                        result[0] = newAttr;
                    }
                }else{
                    globals.DiaryLog.emotions.push(newAttr);
                }
                break;
            case 'Target':
                if (globals.DiaryLog.targets.some((item: Attribute) => item.related_attribute_uuid === newAttr.related_attribute_uuid)){
                    const result = globals.DiaryLog.targets.filter((item: Attribute) => item.related_attribute_uuid == newAttr.related_attribute_uuid);
                    if (result[0]){
                        result[0] = newAttr;
                    }
                }else{
                    globals.DiaryLog.targets.push(newAttr);
                }
                break;
                
        }
    }

    const {name, uId, type} = props;
    var [curValue, setValue] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={[styles.title, {color: colors.text}]}>{name}</Text>
            <View style={styles.rightSide}>
                <Slider
                    value={curValue}
                    onValueChange={(value: number) => {
                        const newAttr = {
                            attribute_uuid: '',
                            related_attribute_uuid: uId,
                            type: type,
                            rating: value,
                            date_created: moment().toISOString(),
                            date_modified: '',
                            diary_entity: '',
                        }
                        updatelocalAttr(newAttr);
                        setValue(curValue = value);
                    }}
                    minimumValue={0}
                    maximumValue={10}
                    step={1}
                    trackStyle={{ height: 5, width: Dimensions.get('screen').width / 3 }}
                    thumbStyle={{ backgroundColor: 'dodgerblue', height: 25, width: 25}}
                    minimumTrackTintColor="gray"
                    maximumTrackTintColor="lightgray"
                    />
                <Text style={[styles.value, {color: colors.primary}]}>{curValue}</Text>
            </View>
        </View>
    )
}

export default AttrInputs;