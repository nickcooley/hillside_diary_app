/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign, Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';
import Colors from '../constants/Colors';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import DiaryScreen from '../screens/DiaryScreen';
import { RecordDiaryStackParamList, RecordScoreStackParamList, RootStackParamList, RootTabParamList, SUDStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import AboutScreen from '../screens/AboutScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RecordFirst from '../screens/Recording/RecordFirst';
import RecordSecond from '../screens/Recording/RecordSecond';
import RecordThree from '../screens/Recording/RecordThree';
import RecordFour from '../screens/Recording/RecordFour';
import RecordFive from '../screens/Recording/RecordFive';
import RecordConfirmation from '../screens/Recording/RecordConfirmation';
import RecordReview from '../screens/Recording/RecordReview';
import SUDScoreScreen from '../screens/SUDScores/SUDScoreListScreen';
import RecordSUDScreen from '../screens/SUDScores/RecordSUDScreen';
import SUDScoreConfirmation from '../screens/SUDScores/SUDScoreConfirmation';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? Colors.dark : Colors.light}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}



/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const theme = useTheme();
  const iconSize = 30;

  return (
    <BottomTab.Navigator
      initialRouteName="Diary"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarStyle: { borderTopColor: theme.colors.background, elevation: 4, marginBottom: 2, paddingVertical: 3 }
      }}>
      <BottomTab.Screen
        name="Diary"
        component={RecordDiaryNavigator}
        options={({
          title: 'Diary',
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign name="book" color={color} size={iconSize} />,
        })}
      />
      <BottomTab.Screen
        name="Scores"
        component={SUDNavigator}
        options={{
          title: 'Scores',
          headerShown: false,
          tabBarIcon: ({ color }) => <Entypo name="list" color={color} size={iconSize} />,
        }}
      />
      <BottomTab.Screen
        name="Recording"
        component={RecordScoreNavigator}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return(
              <View style={{
                height: 45,
                width: 45,
                borderRadius: 60 / 2,
                backgroundColor: theme.colors.primary,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <MaterialIcons name="mood" color={'white'} size={iconSize+5} />
              </View>
            )
          },
        }}
      />
      <BottomTab.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About Us',
          headerShown: false,
          tabBarIcon: ({ color }) => <Feather name="info" color={color} size={iconSize} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign name="idcard" color={color} size={iconSize} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * A recording stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
*/

const RecordDiaryStack = createNativeStackNavigator<RecordDiaryStackParamList>();

function RecordDiaryNavigator() {
  return (
  <RecordDiaryStack.Navigator
    initialRouteName="DiaryList"
  >
    <RecordDiaryStack.Group screenOptions={{headerShown: false}}>
      <RecordDiaryStack.Screen name='DiaryList' component={DiaryScreen} />
      <RecordDiaryStack.Screen name='RecordFirst' component={RecordFirst} />
      <RecordDiaryStack.Screen name='RecordSecond' component={RecordSecond} />
      <RecordDiaryStack.Screen name='RecordThree' component={RecordThree} />
      <RecordDiaryStack.Screen name='RecordFour' component={RecordFour} />
      <RecordDiaryStack.Screen name='RecordFive' component={RecordFive} />
      <RecordDiaryStack.Screen name='RecordReview' component={RecordReview} />
      <RecordDiaryStack.Screen name='RecordConfirmation' component={RecordConfirmation} />
    </RecordDiaryStack.Group>
  </RecordDiaryStack.Navigator>
  );
}

/**
  * A Info stack navigator is often used for displaying modals on top of all other content.
  * https://reactnavigation.org/docs/modal
*/

const SUDStack = createNativeStackNavigator<SUDStackParamList>();

function SUDNavigator() {
  return (
    <SUDStack.Navigator
      initialRouteName="ScoreList"
    >
      <SUDStack.Group screenOptions={{headerShown: false}}>
        <SUDStack.Screen name='ScoreList' component={SUDScoreScreen} />
      </SUDStack.Group>
    </SUDStack.Navigator>
  );
}

/**
 * A recording stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
*/

const RecordScoreStack = createNativeStackNavigator<RecordScoreStackParamList>();

function RecordScoreNavigator() {
  return (
  <RecordScoreStack.Navigator
    initialRouteName="ScoreRecord"
  >
    <RecordScoreStack.Group screenOptions={{headerShown: false}}>
      <RecordScoreStack.Screen name='ScoreRecord' component={RecordSUDScreen} />
      <RecordScoreStack.Screen name='ScoreConfirmed' component={SUDScoreConfirmation} />
    </RecordScoreStack.Group>
  </RecordScoreStack.Navigator>
  );
}
