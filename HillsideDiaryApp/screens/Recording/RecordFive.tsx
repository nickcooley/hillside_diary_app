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

export default function RecordFive({ navigation }: RecordingStackScreenProps<'RecordFive'>) {
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
            <Button style={styles.button} title="Confirm" />
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
