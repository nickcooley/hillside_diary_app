import React, { useMemo } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { RecordDiaryStackScreenProps, RecordDiaryStackParamList } from '../types';
import DiaryEntityList from '../components/diaryEntityList';
import { RouteProp, Theme, useTheme } from '@react-navigation/native';
import { colors } from 'react-native-elements';


export default function DiaryScreen({ navigation }: RecordDiaryStackScreenProps<'DiaryList'>) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  
  return (
    <View style={styles.container}>
      <DiaryEntityList navigation={navigation} route={'Diary' as unknown as RouteProp<RecordDiaryStackParamList, "DiaryList">} />
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
    paddingBottom: 230
  },
});
