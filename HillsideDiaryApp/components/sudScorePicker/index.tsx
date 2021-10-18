import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Slider } from 'react-native-elements';
import styles from './styles';
import global from '../../global/globals'
import { useTheme } from '@react-navigation/native';


export type payload = {
    curValue: number, 
    setValue: React.Dispatch<React.SetStateAction<number>>
}

const SUDScorePicker = (prop: payload) => {

    const {colors} = useTheme();

    var [curColor, setColor] = useState('green');

    const determineColor = (score: number) => {
        if (score >= 0 && score < 3){
            return 'green';
        }
        if (score >= 3 && score < 6){
            return 'orange';
        }
        if (score >= 6 && score < 9){
            return 'orangered';
        }
        else{
            return 'red';
        }
    }
     
    return (
        <View style={styles.container}>
            <Text style={[styles.title, {color: colors.text}]}>Currently, how are you feeling?</Text>
            <View style={styles.iconContainer}>
                <View style={[styles.scoreContainer, {borderColor: curColor, backgroundColor: curColor}]}>
                    <Text style={styles.score}>{prop.curValue}</Text>
                </View>
           </View>
           <View style={styles.sliderContainer}>
               <Slider
                    value={prop.curValue}
                    onValueChange={(value: number) => {
                        prop.setValue(value);
                        setColor(curColor = determineColor(value));
                    }}
                    minimumValue={0}
                    maximumValue={10}
                    step={1}
                    trackStyle={{ height: 10, width: Dimensions.get('screen').width - 100 }}
                    thumbStyle={{ backgroundColor: 'dodgerblue'}}
                    minimumTrackTintColor="gray"
                    maximumTrackTintColor="lightgray"
                />
            </View>
        </View>
    )
}

export default SUDScorePicker;