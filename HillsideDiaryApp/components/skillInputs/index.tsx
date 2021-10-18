import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Button } from 'react-native-elements';
import skillData from '../../data/skillData';
import { RecordDiaryStackScreenProps, Skill } from '../../types';
import AttrInputs from '../attrInputs/index';
import styles from './styles';
import { useTheme } from '@react-navigation/native';
import globals from '../../global/globals';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

export default function SkillInputs({ navigation }: RecordDiaryStackScreenProps<'RecordSecond'>)  {

    const {colors} = useTheme();
    let [readyForRender, setReadyForRender] = useState(false);
    let [skillList, setSkills] = useState<Skill[]>([]);


    async function getAccessToken(key:string) {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
            const accessTok = "Bearer " + result;
            axios({
                "method": "GET",
                "url": globals.apiCalls.skillURi,
                "headers": {
                  "Authorization": accessTok,
                }, "params": {
                }
              })
                .then((response) => {
                  setSkills(response.data['results']);
                  setReadyForRender(true);
                })
                .catch((error) => {
                  console.log(error)
                })
        } else {
            alert('No values stored under that key.');
        }
    }

    
    useEffect(() => {
        getAccessToken("access");
    }, []);

    if (readyForRender) {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={skillList}
                    renderItem={({item}) => <AttrInputs uId={item.skill_uuid} name={item.skill_name} type={'Skill'} value={0}/>}
                    keyExtractor={item => item.skill_uuid}
                    ListHeaderComponent = {<Text style={[styles.title, {color: colors.primary}]}>Skills</Text>}
                    ListFooterComponent = {<Button style={styles.button} title="Next" onPress={()=>{
                        navigation.navigate('RecordThree');
                    }} />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    } else {
        return null;
    }
}