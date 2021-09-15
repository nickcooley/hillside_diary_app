import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import DiaryEntityList from '../components/diaryEntityList';


export default function DiaryScreen({ navigation }: RootTabScreenProps<'Diary'>) {
  const curDate = new Date();
  return (
    <View style={styles.container}>
      <DiaryEntityList curDate={curDate}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Dimensions.get('window').height / 12,
    paddingBottom: 110
  },
});
