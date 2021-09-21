/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import RecordReview from './screens/Recording/RecordReview';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Diary: undefined;
  Skills: undefined;
  Recording: undefined;
  About: undefined;
  Profile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type RecordingStackParamList = {
  RecordFirst: undefined;
  RecordSecond: undefined;
  RecordThree: undefined;
  RecordFour: undefined;
  RecordFive: undefined;
  RecordReview: undefined;
  RecordConfirmation: undefined;
};

export type RecordingStackScreenProps<Screen extends keyof RecordingStackParamList> = NativeStackScreenProps<
RecordingStackParamList,
  Screen
>;

export type DiaryEntity = {
  id: number;
  time: string;
  date: string;
  month: number;
  day: number;
  year: number;
  sudScore: number;
  skills: [Attr];
  targets: [Attr];
  emotions: [Attr];
  note: string;
}

export type Skill = {
  id: number,
  name: string,
  category: string,
}

export type Emotion = {
  id: number,
  name: string,
  category: string,
}

export type Target = {
  id: number,
  name: string,
  category: string,
}

export type Attr = {
  id: number
  type: string,
  value: number
}

