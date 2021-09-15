import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Button } from 'react-native-elements';
import targetData from '../../data/targetData';
import { RecordingStackScreenProps } from '../../types';
import AttrInputs from '../attrInputs/index';
import styles from './styles';

export default function TargetInputs({ navigation }: RecordingStackScreenProps<'RecordFour'>)  {

    return (
        <View style={styles.container}>
            <FlatList 
                data={targetData}
                renderItem={({item}) => <AttrInputs name={item.name}/>}
                ListHeaderComponent = {<Text style={styles.emotionTitle}>Targets</Text>}
                ListFooterComponent = {<Button style={styles.button} title="Next" onPress={()=>navigation.navigate('RecordFive')} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}