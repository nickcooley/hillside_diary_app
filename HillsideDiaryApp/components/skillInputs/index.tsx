import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { Button } from 'react-native-elements';
import skillData from '../../data/skillData';
import { RecordDiaryStackScreenProps } from '../../types';
import AttrInputs from '../attrInputs/index';
import styles from './styles';
import { useTheme } from '@react-navigation/native';

export default function SkillInputs({ navigation }: RecordDiaryStackScreenProps<'RecordSecond'>)  {

    const {colors} = useTheme();

    return (
        <View style={styles.container}>
            <FlatList 
                data={skillData}
                renderItem={({item}) => <AttrInputs name={item.name} id={item.id} type={'Skill'}/>}
                keyExtractor={item => item.id.toString()}
                ListHeaderComponent = {<Text style={[styles.title, {color: colors.primary}]}>Skills</Text>}
                ListFooterComponent = {<Button style={styles.button} title="Next" onPress={()=>{
                    navigation.navigate('RecordThree');
                }} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}