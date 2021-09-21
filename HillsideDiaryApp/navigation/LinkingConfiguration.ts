/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from '../types';
import RecordThree from '../screens/Recording/RecordThree';
import RecordFour from '../screens/Recording/RecordFour';
import RecordFive from '../screens/Recording/RecordFive';
import RecordConfirmation from '../screens/Recording/RecordConfirmation';
import RecordReview from '../screens/Recording/RecordReview';



const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Diary: {},
          Skills: {},
          Recording: {
            screens: {
              RecordFirst: 'recordFirst',
              RecordSecond: 'recordSecond',
              RecordThree: 'recordThree',
              RecordFour: 'recordFour',
              RecordFive: 'recordFive',
              RecordReview: 'recordReview',
              RecordConfirmation: 'recordConfirmation'
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
