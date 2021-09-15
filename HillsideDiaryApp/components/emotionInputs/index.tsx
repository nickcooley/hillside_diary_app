import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Button } from 'react-native-elements';
import emotionData from '../../data/emotionData';
import { RecordingStackScreenProps } from '../../types';
import AttrInputs from '../attrInputs/index';
import styles from './styles';

export default function EmotionInputs({ navigation }: RecordingStackScreenProps<'RecordThree'>)  {

    return (
        <View style={styles.container}>
            <FlatList 
                data={emotionData}
                renderItem={({item}) => <AttrInputs name={item.name}/>}
                ListHeaderComponent = {<Text style={styles.emotionTitle}>Emotions</Text>}
                ListFooterComponent = {<Button style={styles.button} title="Next" onPress={()=>navigation.navigate('RecordFour')} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}