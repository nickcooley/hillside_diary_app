import React, { useMemo } from 'react';
import { StyleSheet, Dimensions, SafeAreaView, View } from 'react-native';
import { SUDStackParamList, SUDStackScreenProps } from '../../types';
import DiaryEntityList from '../../components/diaryEntityList';
import { RouteProp, Theme, useTheme } from '@react-navigation/native';
import { colors } from 'react-native-elements';
import SUDEntityList from '../../components/sudEntityList/index';


export default function SUDScoreScreen({ navigation }: SUDStackScreenProps<'ScoreList'>) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  
  return (
    <SafeAreaView style={styles.container}>
      <SUDEntityList navigation={navigation} route={'Scores' as unknown as RouteProp<SUDStackParamList, 'ScoreList'>} />
    </SafeAreaView>
  );
}

const createStyles = (theme: Theme) => 
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: Dimensions.get('screen').height / 20
    },
});
