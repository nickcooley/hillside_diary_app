import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Slider } from 'react-native-elements';
import globals from '../../global/globals';
import styles from './styles';
import { Attr } from '../../types';
import { useTheme } from '@react-navigation/native';

export type AttrProps = {
    name: string,
    id: number,
    type: string,
}



const AttrInputs = (props: AttrProps) => {

    const {colors} = useTheme();

    const updatelocalAttr=(newAttr: Attr)=>{
        switch (newAttr.type){
            case 'Skill':
                if (globals.DiaryLog.skills.some((item: Attr) => item.id === newAttr.id)){
                        const result = globals.DiaryLog.skills.filter((item: Attr) => item.id == newAttr.id);
                        if (result[0]){
                            result[0].value = newAttr.value;
                        }
                }else{
                    globals.DiaryLog.skills.push(newAttr);
                }
                break;
            case 'Emotion':
                if (globals.DiaryLog.emotions.some((item: Attr) => item.id === newAttr.id)){
                    const result = globals.DiaryLog.emotions.filter((item: Attr) => item.id == newAttr.id);
                    if (result[0]){
                        result[0].value = newAttr.value;
                    }
                }else{
                    globals.DiaryLog.emotions.push(newAttr);
                }
                break;
            case 'Target':
                if (globals.DiaryLog.targets.some((item: Attr) => item.id === newAttr.id)){
                    const result = globals.DiaryLog.targets.filter((item: Attr) => item.id == newAttr.id);
                    if (result[0]){
                        result[0].value = newAttr.value;
                    }
                }else{
                    globals.DiaryLog.targets.push(newAttr);
                }
                break;
                
        }
    }

    const {name, id, type} = props;
    var [curValue, setValue] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={[styles.title, {color: colors.text}]}>{name}</Text>
            <View style={styles.rightSide}>
                <Slider
                    value={curValue}
                    onValueChange={(value: number) => {
                        const newAttr = {
                            id: id,
                            type: type,
                            value: value,
                        }
                        updatelocalAttr(newAttr);
                        setValue(curValue = value);
                    }}
                    minimumValue={0}
                    maximumValue={6}
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