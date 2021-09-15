import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Button } from 'react-native-elements';
import skillData from '../../data/skillData';
import { RecordingStackScreenProps } from '../../types';
import AttrInputs from '../attrInputs/index';
import styles from './styles';

export default function SkillInputs({ navigation }: RecordingStackScreenProps<'RecordSecond'>)  {

    return (
        <View style={styles.container}>
            <FlatList 
                data={skillData}
                renderItem={({item}) => <AttrInputs name={item.name}/>}
                ListHeaderComponent = {<Text style={styles.emotionTitle}>Skills</Text>}
                ListFooterComponent = {<Button style={styles.button} title="Next" onPress={()=>navigation.navigate('RecordThree')} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}