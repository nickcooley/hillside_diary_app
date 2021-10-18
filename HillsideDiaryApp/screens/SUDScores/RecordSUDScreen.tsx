import React, { useMemo } from 'react';
import { StyleSheet, Dimensions, SafeAreaView, Text, View } from 'react-native';
import { Theme, useTheme } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import moment from 'moment';
import { RecordScoreStackScreenProps } from '../../types';
import SUDScorePicker from '../../components/sudScorePicker';
import globals from '../../global/globals';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import { useState } from 'react';


export default function RecordSUDScreen({ navigation }: RecordScoreStackScreenProps<'ScoreRecord'>) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  var [curValue, setValue] = useState(0);


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

  async function sendScore(key:string) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        const accessTok = "Bearer " + result;
        var bodyFormData = new FormData();
        const curDate = moment().toISOString();
        console.log(curDate);
        bodyFormData.append('date_added', curDate);
        bodyFormData.append('score', curValue.toString());
        axios({
            method: "post",
            url: globals.apiCalls.scoreURi,
            data: bodyFormData,
            headers: {
              "Authorization": accessTok,
              "Content-Type": "multipart/form-data"
            }
          })
            .then((response) => {
              console.log(response);
              navigation.navigate('ScoreConfirmed');
              
            })
            .catch((error) => {
              console.log(error)
            })
    } else {
        alert('No values stored under that key.');
    }
}

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Recording at</Text>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{currentDate}</Text>
        <Text style={styles.time}>{currentTime}</Text>
      </View>
      <View style={styles.sudContainer}>
        <SUDScorePicker curValue={curValue} setValue={setValue} />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Submit" onPress={()=>{  
          sendScore('access')
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
