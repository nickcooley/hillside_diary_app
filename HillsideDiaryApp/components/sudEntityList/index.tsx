import React, { useState } from 'react';
import { View, FlatList, Text, Dimensions } from 'react-native';
import styles from './styles';
import { SUDStackScreenProps, SUDEntity } from '../../types';
import { useTheme } from '@react-navigation/native';
import CalendarStrip from 'react-native-calendar-strip';
import scoreData from '../../data/scoreData';
import SUDEntityView from '../sudEntityView/index';
import moment from 'moment';

export type curDate = {
    curDate: Date
}

export default function SUDEntityList({ navigation }: SUDStackScreenProps<'ScoreList'>) {

    const {colors} = useTheme();

    var [month, setMonth] = useState(moment().month());
    var [year, setYear] = useState(moment().year());
    var [day, setDay] = useState(moment().date());

    const onDateSelected = (selectedDate: moment.Moment) => {
        setDay(day = selectedDate.date());
        setMonth(month = selectedDate.month()+1);
        setYear(year = selectedDate.year());
    }

    return (
        <View style={styles.container}>
            <View>
                <CalendarStrip
                    scrollable
                    style={{paddingBottom: 10, height: Dimensions.get('screen').height / 10}}
                    calendarColor={colors.primary}
                    calendarHeaderPosition='above'
                    calendarHeaderStyle={{color: colors.background, position: 'absolute', fontSize: 20}}
                    calendarHeaderContainerStyle={{paddingTop: 30}}
                    dateNumberStyle={{color: colors.background}}
                    dateNameStyle={{color: colors.background}}
                    highlightDateNameStyle={{color: colors.text}}
                    highlightDateNumberStyle={{color: colors.text}}
                    iconContainer={{flex: 0.1}}
                    onDateSelected={onDateSelected}
                    selectedDate={moment()}
                    startingDate={moment()}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>SUD Scores</Text>
            </View>
            <View style={styles.listContainer}>
                {scoreData.some(entity => entity.day == day && entity.month == month) ? 
                    <FlatList
                        data={scoreData.filter(entity => entity.day == day && entity.month == month)}
                        renderItem={({item}) => <SUDEntityView sudEntity={item as SUDEntity}/>}
                        keyExtractor={(item) => item.id.toString()}
                    /> :
                    <View style={{alignItems: 'center', paddingTop: 20}}>
                        <Text style={styles.listText}>No Available Data</Text>
                    </View>
                }
            </View>
        </View>
    )
}