import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import SUDScorePicker from '../../components/sudScorePicker';
import { Text, View } from '../../components/Themed';
import { RecordingStackScreenProps } from '../../types';


const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function RecordFirst({ navigation }: RecordingStackScreenProps<'RecordFirst'>) {

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setDate(currentDate = getCurrentDate());
      setTime(currentTime = getCurrentTime());
    });

    return unsubscribe;
  }, [navigation]);

  const getCurrentDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    return monthNames[month] + ' ' + date + ', ' + year;
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
    <View style={styles.container}>
      <Text style={{fontSize: 18}}>Recording at</Text>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{currentDate}</Text>
        <Text style={styles.time}>{currentTime}</Text>
      </View>
      <View style={styles.sudContainer}>
        <SUDScorePicker />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Next" onPress={()=>navigation.navigate('RecordSecond')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Dimensions.get('screen').height / 10
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
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20
  },
  button: {
    width: Dimensions.get('screen').width - 30
  },
});
