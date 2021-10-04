import React, { useMemo, useState } from 'react';
import { StyleSheet, Dimensions, SafeAreaView, TouchableWithoutFeedback, Text, View } from 'react-native';
import { Theme, useTheme } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { RecordScoreStackScreenProps } from '../../types';
import SUDScorePicker from '../../components/sudScorePicker';
import scoreData from '../../data/scoreData';
import globals from '../../global/globals';


export default function RecordSUDScreen({ navigation }: RecordScoreStackScreenProps<'ScoreRecord'>) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);


  const getCurrentDate=()=>{
    const day = moment().date();
    const month = moment().format('MMMM');
    const year = moment().year();

    return month + ' ' + day + ', ' + year;
  }

  const getCurrentTime=()=>{
    const hours = moment().hour();
    const min = moment().minute();
    const sec = moment().second();

    return hours + ':' + min + ':' + sec;
  }
  
  const currentDate = getCurrentDate();
  const currentTime = getCurrentTime();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Recording at</Text>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{currentDate}</Text>
        <Text style={styles.time}>{currentTime}</Text>
      </View>
      <View style={styles.sudContainer}>
        <SUDScorePicker />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Submit" onPress={()=>{
          scoreData.push({
            id: 6,
            time: getCurrentTime(),
            date: getCurrentDate(),
            month: moment().month(),
            day: moment().date(),
            year: moment().year(),
            sudScore: globals.SUDScore.score
          });
          console.log(scoreData);
          navigation.navigate('ScoreConfirmed');
        }} />
      </View>
    </SafeAreaView>
  );
}

const createStyles = (theme: Theme) => 
StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Dimensions.get('window').height / 12,
    paddingBottom: 230
  },
  header: {
    fontSize: 18,
    color: theme.colors.text,
    paddingTop: 30,
  },
  dateContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  date: {
    color: theme.colors.primary,
    fontSize: 35,
    fontWeight: 'bold',
    paddingVertical: 10
  },
  time: {
    color: theme.colors.text,
    fontSize: 30,
  },
  title: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: 'bold',
  },
  backIcon: {
    color: theme.colors.text, 
    paddingLeft: 20
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
