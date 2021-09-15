import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { RecordingStackParamList, RecordingStackScreenProps } from '../../types';
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import TargetInputs from '../../components/targetInputs/index';
import { RouteProp } from '@react-navigation/native';

export default function RecordFour({ navigation }: RecordingStackScreenProps<'RecordFour'>) {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => { navigation.goBack()}}>
                <Ionicons name="arrow-back-sharp" size={40} style={styles.icon}></Ionicons>
            </TouchableWithoutFeedback>
            <Text style={styles.title}>Back</Text>
        </View>
        <View style={styles.targetContainer}>
            <TargetInputs navigation={navigation} route={"RecordFour" as unknown as RouteProp<RecordingStackParamList, "RecordFour">}/>
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
  targetContainer: {
      paddingTop: 20,
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
