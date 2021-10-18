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
  App: NavigatorScreenParams<RootTabParamList> | undefined;
  Auth: undefined;
  NotFound: undefined;
  Login: undefined;
  Register: undefined;
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
  score_uuid: string;
  date_added: Date;
  score: number;
  patient_uuid: string;
}

export type DiaryEntity = {
  entry_uuid: string;
  skills: [Skill];
  targets: [Target];
  emotions: [Emotion];
  date_added: Date;
  date_modified: Date;
  mood_score: number;
  note: string;
  patient_uuid: Date;
}

export type Attribute = {
  attribute_uuid: string,
  date_created: string,
  date_modified: string,
  diary_entity: string,
  rating: number,
  related_attribute_uuid: string,
  type: string
}

export type Skill = {
  skill_uuid: string,
  skill_name: string,
  skill_description: string,
  date_added: Date,
  date_modified: Date,
  active: boolean,
  category: string,
  creator_uuid: string
}

export type Target = {
  target_uuid: string,
  target_name: string,
  target_description: string,
  date_added: Date,
  date_modified: Date,
  active: boolean,
  is_for_all: boolean,
  category: string,
  creator_uuid: string,
  patient_uuid: string,
}

export type Emotion = {
  emotion_uuid: string,
  emotion_name: string,
  emotion_description: string,
  date_added: Date,
  date_modified: Date,
  active: boolean,
  is_for_all: boolean,
  creator_uuid: string,
  patient_uuid: string
}


export type User = {
  user_uuid: string,
  last_login: Date,
  is_superuser: boolean,
  first_name: string,
  last_name: string,
  phone_number: string,
  email: string,
  date_joined: Date,
  is_staff: boolean,
  email_is_verified: boolean,
  phone_number_is_verified: boolean,
  is_active: boolean
}
