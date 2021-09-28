import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Button } from 'react-native-elements';
import emotionData from '../../data/emotionData';
import { RecordingStackScreenProps } from '../../types';
import AttrInputs from '../attrInputs/index';
import styles from './styles';
import { useTheme } from '@react-navigation/native';

export default function EmotionInputs({ navigation }: RecordingStackScreenProps<'RecordThree'>)  {

    const {colors} = useTheme();
    
    return (
        <View style={styles.container}>
            <FlatList
                style={{width: '90%'}}
                data={emotionData}
                renderItem={({item}) => <AttrInputs name={item.name} id={item.id} type={'Emotion'}/>}
                keyExtractor={item => item.id.toString()}
                ListHeaderComponent = {<Text style={[styles.title, {color: colors.primary}]}>Emotions</Text>}
                ListFooterComponent = {<Button style={styles.button} title="Next" onPress={()=>{
                    navigation.navigate('RecordFour');
                }} />}                
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}