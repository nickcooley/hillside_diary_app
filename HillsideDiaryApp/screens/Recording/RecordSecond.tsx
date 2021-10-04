import * as React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { RecordDiaryStackParamList, RecordDiaryStackScreenProps } from '../../types';
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import SkillInputs from '../../components/skillInputs';
import { RouteProp, useTheme } from '@react-navigation/native';

export default function RecordSecond({ navigation }: RecordDiaryStackScreenProps<'RecordSecond'>) {

  const {colors} = useTheme();
  
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => { navigation.goBack()}}>
                <Ionicons name="arrow-back-sharp" size={40} style={{color: colors.text, paddingLeft: 20}}></Ionicons>
            </TouchableWithoutFeedback>
            <Text style={[styles.title, {color: colors.text}]}>Back</Text>
        </View>
        <View style={styles.skillContainer}>
            <SkillInputs navigation={navigation} route={"RecordSecond" as unknown as RouteProp<RecordDiaryStackParamList, "RecordSecond">} />
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
  skillContainer: {
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
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    width: Dimensions.get('screen').width - 30
  },
});
