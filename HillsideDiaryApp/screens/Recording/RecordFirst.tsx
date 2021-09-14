import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import { RecordingStackScreenProps } from '../../types';

export default function RecordFirst({ navigation }: RecordingStackScreenProps<'RecordFirst'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recording the First Step</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('RecordSecond')} >
        <Text>Click Me!</Text>
      </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
