import React, { useMemo } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import DiaryEntityList from '../components/diaryEntityList';
import { Theme, useTheme } from '@react-navigation/native';
import { colors } from 'react-native-elements';


export default function DiaryScreen({ navigation }: RootTabScreenProps<'Diary'>) {
  const curDate = new Date();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  
  return (
    <View style={styles.container}>
      <DiaryEntityList curDate={curDate}/>
    </View>
  );
}

const createStyles = (theme: Theme) => 
StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Dimensions.get('window').height / 12,
    paddingBottom: 110
  },
});
