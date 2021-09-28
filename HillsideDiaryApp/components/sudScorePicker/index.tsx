import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Slider } from 'react-native-elements';
import styles from './styles';
import global from '../../global/globals'
import { useTheme } from '@react-navigation/native';


const SUDScorePicker = () => {

    const {colors} = useTheme();

    const emotionIcon = ['emoticon-cry-outline', 'emoticon-frown-outline', 'emoticon-confused-outline', 'emoticon-neutral-outline', 'emoticon-happy-outline', 'emoticon-outline', 'emoticon-excited-outline'] as any[];
    const emotionText = ['Depressed', 'Sad', 'Unsure', 'Neutral', 'Alright', 'Happy', 'Thrilled'] as any[];

    var [curValue, setValue] = useState(0);
     
    return (
        <View style={styles.container}>
            <Text style={[styles.title, {color: colors.text}]}>Currently, how are you feeling?</Text>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name={emotionIcon[curValue]} size={150} color={colors.primary} />
           </View>
           <View style={styles.sliderContainer}>
               <Slider
                    value={curValue}
                    onValueChange={(value: number) => {
                        global.DiaryLog.sudScore = value;
                        setValue(curValue = value)
                    }}
                    minimumValue={0}
                    maximumValue={6}
                    step={1}
                    trackStyle={{ height: 10, width: Dimensions.get('screen').width - 100 }}
                    thumbStyle={{ backgroundColor: 'dodgerblue'}}
                    minimumTrackTintColor="gray"
                    maximumTrackTintColor="lightgray"
                />
                <Text style={{paddingTop: 10, color: colors.text}}>I am feeling {emotionText[curValue]} - {curValue}</Text>
            </View>
        </View>
    )
}

export default SUDScorePicker;