/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
*/

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

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
  Scores: undefined;
  Recording: undefined;
  About: undefined;
  Profile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type RecordDiaryStackParamList = {
  DiaryList: undefined;
  RecordFirst: undefined;
  RecordSecond: undefined;
  RecordThree: undefined;
  RecordFour: undefined;
  RecordFive: undefined;
  RecordReview: undefined;
  RecordConfirmation: undefined;
};

export type RecordDiaryStackScreenProps<Screen extends keyof RecordDiaryStackParamList> = NativeStackScreenProps<RecordDiaryStackParamList,Screen>;

export type SUDStackParamList = {
  ScoreList: undefined;
  RecordSUD: undefined;
}

export type SUDStackScreenProps<Screen extends keyof SUDStackParamList> = NativeStackScreenProps<SUDStackParamList, Screen>;

export type RecordScoreStackParamList = {
  ScoreRecord: undefined;
  ScoreConfirmed: undefined;
};

export type RecordScoreStackScreenProps<Screen extends keyof RecordScoreStackParamList> = NativeStackScreenProps<RecordScoreStackParamList,Screen>;


export type SUDEntity = {
  id: number;
  time: string;
  date: string;
  month: number;
  day: number;
  year: number;
  sudScore: number;
}

export type DiaryEntity = {
  id: number;
  time: string;
  date: string;
  month: number;
  day: number;
  year: number;
  moodScore: number;
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

