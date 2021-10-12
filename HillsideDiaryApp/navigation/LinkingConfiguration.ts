/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from '../types';
import DiaryScreen from '../screens/DiaryScreen';




const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Diary: {
            screens: {
              DiaryScreen: 'DiaryList',
              RecordFirst: 'RecordFirst',
              RecordSecond: 'RecordSecond',
              RecordThird: 'RecordThird',
              RecordFour: 'RecordFour',
              RecordFive: 'RecordFive',
              RecordReview: 'RecordReview',
              RecordConfirmation: 'RecordConfirmation',
            }
          },
          Scores: {},
          Recording: {
            screens: {
              RecordSUD: 'ScoreRecord',
              SUDConfirmation: 'ScoreConfirmed'
            }
          },
          About: {},
          Profile: {}
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
