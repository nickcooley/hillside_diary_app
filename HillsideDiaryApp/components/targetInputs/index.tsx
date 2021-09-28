import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Button } from 'react-native-elements';
import targetData from '../../data/targetData';
import globals from '../../global/globals';
import { RecordingStackScreenProps } from '../../types';
import AttrInputs from '../attrInputs/index';
import styles from './styles';
import { useTheme } from '@react-navigation/native';

export default function TargetInputs({ navigation }: RecordingStackScreenProps<'RecordFour'>)  {

    const {colors} = useTheme();

    return (
        <View style={styles.container}>
            <FlatList 
                style={{width: '90%'}}
                data={targetData}
                renderItem={({item}) => <AttrInputs name={item.name} id={item.id} type={'Target'}/>}
                keyExtractor={item => item.id.toString()}
                ListHeaderComponent = {<Text style={[styles.title, {color: colors.primary}]}>Targets</Text>}
                ListFooterComponent = {<Button style={styles.button} title="Next" onPress={()=>{
                    navigation.navigate('RecordFive');
                }} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}