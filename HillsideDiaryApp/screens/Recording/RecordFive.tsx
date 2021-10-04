import * as React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { RecordDiaryStackParamList, RecordDiaryStackScreenProps } from '../../types';
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import NoteInput from '../../components/noteInputs';
import { RouteProp, useTheme } from '@react-navigation/native';
import globals from '../../global/globals';
import {Attr} from '../../types';

export default function RecordFive({ navigation }: RecordDiaryStackScreenProps<'RecordFive'>) {

  const {colors} = useTheme();

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
                <Ionicons name="arrow-back-sharp" size={40} style={{color: colors.text, paddingLeft: 20}}></Ionicons>
            </TouchableWithoutFeedback>
            <Text style={[styles.title, {color: colors.text}]}>Back</Text>
        </View>
        <View style={styles.noteContainer}>
            <NoteInput navigation={navigation} route={"RecordFive" as unknown as RouteProp<RecordDiaryStackParamList, "RecordFive">} />
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
    paddingBottom: 20,
    width: Dimensions.get('screen').width - 30
  },
  button: {
    width: Dimensions.get('screen').width - 30
  },
});
