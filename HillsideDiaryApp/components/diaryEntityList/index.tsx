import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import styles from './styles';
import { DiaryEntity, RecordDiaryStackScreenProps } from '../../types';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import DiaryEntityView from '../diaryEntityView';
import { useTheme } from '@react-navigation/native';
import globals from '../../global/globals';
import axios from 'axios';
import moment from 'moment';
import * as SecureStore from 'expo-secure-store';


export default function DiaryEntityList({ navigation }: RecordDiaryStackScreenProps<'DiaryList'>) {

    const {colors} = useTheme();

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const curDate = new Date();

    let [month, setMonth] = useState(curDate.getMonth());
    let [year, setYear] = useState(curDate.getFullYear());
    let [readyForRender, setReadyForRender] = useState(false);
    let [diaryEntries, setEntries] = useState<DiaryEntity[]>([]);

    async function getAccessToken(key:string) {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
            const accessTok = "Bearer " + result;
            axios({
                "method": "GET",
                "url": globals.apiCalls.diaryEntityURi,
                "headers": {
                  "Authorization": accessTok,
                }, "params": {
                }
              })
                .then((response) => {
                  setEntries(response.data['results']);
                  setReadyForRender(true);
                })
                .catch((error) => {
                  console.log(error)
                })
        } else {
            alert('No values stored under that key.');
        }
    }


    const onPressLeft = () => {
        if (month == 0){
            setYear(year - 1);
            setMonth(11);
        } else {
            setMonth(month - 1);
        }
   
    }

    const onPressRight = () => {
        if (month == 11){
            setYear(year + 1);
            setMonth(0);
        } else {
            setMonth(month + 1);
        }
    }

    useEffect(() => {
        getAccessToken("access");
    }, []);


    if (readyForRender) {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={[styles.title, {color: colors.text}]}>Your Diary</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity onPress={()=> {
                            getAccessToken('access');
                        }} style={{paddingRight: 20}}>
                            <Ionicons name="refresh" size={40} />
                        </TouchableOpacity>
                        <TouchableWithoutFeedback onPress={()=>{navigation.navigate('RecordFirst');}}>
                            <Ionicons name='add-circle-outline' color={colors.primary} size={45}/>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <View style={styles.datePickerContainer}>
                    <TouchableWithoutFeedback onPress={onPressLeft}>
                        <View>
                            <AntDesign name="left" color={colors.primary} size={35}/>     
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <Text style={[styles.datePickerText, {color: colors.primary}]}>{monthNames[month]} {year}</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={onPressRight}>
                        <View>
                            <AntDesign name="right" color={colors.primary} size={35}/>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View>
                    {diaryEntries.length > 0 ? 
                    <FlatList
                        data={diaryEntries.filter(entity => moment(entity.date_added).month() == month)}
                        renderItem={({item}) => <DiaryEntityView diaryEntity={item as DiaryEntity}/>}
                        keyExtractor={(item) => item.entry_uuid}
                    /> : <Text>Error</Text>}
                </View>
            </View>
        )
    } else {
       return null;
    }
}