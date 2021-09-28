import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { RecordingStackParamList, RecordingStackScreenProps } from '../../types';
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import EmotionInputs from '../../components/emotionInputs';
import { RouteProp, useTheme } from '@react-navigation/native';

export default function RecordThree({ navigation }: RecordingStackScreenProps<'RecordThree'>) {

  const {colors} = useTheme();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => { navigation.goBack()}}>
                <Ionicons name="arrow-back-sharp" size={40} style={{color: colors.text, paddingLeft: 20}}></Ionicons>
            </TouchableWithoutFeedback>
            <Text style={[styles.title, {color: colors.text}]}>Back</Text>
        </View>
        <View style={styles.emotionContainer}>
            <EmotionInputs navigation={navigation} route={"RecordThree" as unknown as RouteProp<RecordingStackParamList, "RecordThree">} />
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
  emotionContainer: {
    width: '100%',
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
    justifyContent: 'flex-end',
  },
  button: {
    width: Dimensions.get('screen').width - 30
  },
});
