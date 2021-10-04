import React, { useState } from 'react';
import { View, FlatList, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import entitiesData from '../../data/entitiesData';
import { DiaryEntity, RecordDiaryStackScreenProps } from '../../types';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import DiaryEntityView from '../diaryEntityView';
import { useTheme } from '@react-navigation/native';

export type curDate = {
    curDate: Date
}

export default function DiaryEntityList({ navigation }: RecordDiaryStackScreenProps<'DiaryList'>) {

    const {colors} = useTheme();

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const curDate = new Date();
    const curMonth = curDate.getMonth();
    const curYear = curDate.getFullYear();
    var [month, setMonth] = useState(curMonth);
    var [year, setYear] = useState(curYear);


    const onPressLeft = () => {
        if (month == 0){
            setYear(year = year - 1);
            setMonth(month = 11);
        } else {
            setMonth(month = month - 1);
        }
   
    }

    const onPressRight = () => {
        if (month == 11){
            setYear(year = year + 1);
            setMonth(month = 0);
        } else {
            setMonth(month = month + 1);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={[styles.title, {color: colors.text}]}>Your Diary</Text>
                </View>
                <TouchableWithoutFeedback onPress={()=>{navigation.navigate('RecordFirst');}}>
                    <Ionicons name='add-circle-outline' color={colors.primary} size={45}/>
                </TouchableWithoutFeedback>
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
                <FlatList
                    data={entitiesData.filter(entity => entity.month == month+1)}
                    renderItem={({item}) => <DiaryEntityView diaryEntity={item as DiaryEntity}/>}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    )
}