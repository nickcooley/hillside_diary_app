import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { RecordingStackParamList, RecordingStackScreenProps } from '../../types';
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import TargetInputs from '../../components/targetInputs/index';
import NoteInput from '../../components/noteInputs';
import { RouteProp } from '@react-navigation/native';
import globals from '../../global/globals';
import {Attr} from '../../types';

export default function RecordFive({ navigation }: RecordingStackScreenProps<'RecordFive'>) {

  const cleanUpAttr = () => {
    const newSkills = globals.DiaryLog.skills.filter((item) => item.value > 0);
    const newEmotions = globals.DiaryLog.emotions.filter((item) => item.value > 0);
    const newTargets = globals.DiaryLog.targets.filter((item) => item.value > 0);

    globals.DiaryLog.skills = newSkills as [Attr];
    globals.DiaryLog.emotions = newEmotions as [Attr];
    globals.DiaryLog.targets = newTargets as [Attr];


  };
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => { navigation.goBack()}}>
                <Ionicons name="arrow-back-sharp" size={40} style={styles.icon}></Ionicons>
            </TouchableWithoutFeedback>
            <Text style={styles.title}>Back</Text>
        </View>
        <View style={styles.noteContainer}>
            <NoteInput navigation={navigation} route={"RecordFive" as unknown as RouteProp<RecordingStackParamList, "RecordFive">} />
        </View>
        <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Review" onPress={()=>{
          cleanUpAttr();
          navigation.navigate('RecordReview');
        }} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Dimensions.get('screen').height / 10,
  },
  noteContainer: {
      width: '100%',
      padding: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 20,
  },
  icon: {
    paddingLeft: 20
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
