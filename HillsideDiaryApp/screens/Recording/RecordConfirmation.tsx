import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { RecordingStackScreenProps } from '../../types';
import { Feather } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default function RecordConfirmation({ navigation }: RecordingStackScreenProps<'RecordConfirmation'>) {

  return (
    <View style={styles.container}>
        <Feather name={'check-circle'} size={75}/>
        <Text style={styles.title}>Thank You!</Text>
        <Text style={styles.subtitle}>Your log has been recorded</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.light.primary,
    paddingVertical: 15,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray'
  },
});
