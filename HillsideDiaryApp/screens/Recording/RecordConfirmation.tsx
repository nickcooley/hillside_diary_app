import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { RecordingStackScreenProps } from '../../types';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import useColorScheme from '../../hooks/useColorScheme';

export default function RecordConfirmation({ navigation }: RecordingStackScreenProps<'RecordConfirmation'>) {

  const {colors} = useTheme();
  const dark = useColorScheme();
  
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
        <Feather name={'check-circle'} size={75} style={{color: colors.primary}}/>
        <Text style={[styles.title, {color: colors.text}]}>Thank You!</Text>
        <Text style={[styles.subtitle, {color: dark ? 'lightgray' : 'gray'}]}>Your log has been recorded</Text>
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
    paddingVertical: 15,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray'
  },
});
