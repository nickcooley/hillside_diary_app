import React, { useState } from 'react';
import { View, FlatList, TouchableHighlight, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import entitiesData from '../../data/entitiesData';
import DiaryEntityComponent from '../diaryEntity/index';
import { DiaryEntity } from '../../types';
import { AntDesign } from '@expo/vector-icons';
import DiaryEntityView from '../diaryEntityView';

export type curDate = {
    curDate: Date
}

const DiaryEntityList = (props: curDate) => {

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const {curDate} = props;
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
            <View style={styles.datePickerContainer}>
                <TouchableWithoutFeedback onPress={onPressLeft}>
                    <View>
                        <AntDesign name="left" style={styles.datePickerIcon} size={35}/>     
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Text style={styles.datePickerText}>{monthNames[month]} {year}</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={onPressRight}>
                    <View>
                        <AntDesign name="right" style={styles.datePickerIcon} size={35}/>
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

export default DiaryEntityList;