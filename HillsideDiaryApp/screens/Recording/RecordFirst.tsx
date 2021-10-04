import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import SUDScorePicker from '../../components/moodScorePicker';
import globals from '../../global/globals';
import { RecordDiaryStackScreenProps } from '../../types';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function RecordFirst({ navigation }: RecordDiaryStackScreenProps<'RecordFirst'>) {

  const {colors} = useTheme();

  let day: number;
  let month: number;
  let year: number;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setDate(currentDate = getCurrentDate());
      setTime(currentTime = getCurrentTime());
    });

    return unsubscribe;
  }, [navigation]);

  const getCurrentDate=()=>{

    day = new Date().getDate();
    month = new Date().getMonth() + 1;
    year = new Date().getFullYear();

    return monthNames[month-1] + ' ' + day + ', ' + year;
  }

  const getCurrentTime=()=>{

    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();

    return hours + ':' + min + ':' + sec;
  }

  var [currentDate, setDate] = useState(getCurrentDate());
  var [currentTime, setTime] = useState(getCurrentTime());
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => { navigation.goBack()}}>
              <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Ionicons name="arrow-back-sharp" size={40} style={{color: colors.text, paddingLeft: 20}} />
                <Text style={[styles.title, {color: colors.text}]}>Back</Text>
              </View>
          </TouchableWithoutFeedback>
      </View>
      <Text style={{fontSize: 18, color: colors.text}}>Recording at</Text>
      <View style={styles.dateContainer}>
        <Text style={[styles.date, {color: colors.primary}]}>{currentDate}</Text>
        <Text style={[styles.time, {color: colors.text}]}>{currentTime}</Text>
      </View>
      <View style={styles.sudContainer}>
        <SUDScorePicker />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Next" onPress={()=>{
          globals.DiaryLog.day = day;
          globals.DiaryLog.month = month;
          globals.DiaryLog.year = year;
          globals.DiaryLog.date = currentDate;
          globals.DiaryLog.time = currentTime;
          globals.DiaryLog
          navigation.navigate('RecordSecond');
        }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Dimensions.get('screen').height / 10
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20
  },
  dateContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  date: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingVertical: 10
  },
  time: {
    fontSize: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sudContainer: {
    paddingVertical: 25,
  },
  buttonContainer: {
    width: Dimensions.get('screen').width - 40,
    justifyContent: 'flex-end',
    paddingVertical: 20
  },
  button: {
    width: Dimensions.get('screen').width - 30,
  },
});
