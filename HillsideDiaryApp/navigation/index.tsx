/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign, Feather, FontAwesome, Foundation, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import DiaryScreen from '../screens/DiaryScreen';
import SkillScreen from '../screens/SkillScreen';
import { RecordingStackParamList, RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import AboutScreen from '../screens/AboutScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RecordScreen from '../screens/Recording/RecordFirst';
import RecordFirst from '../screens/Recording/RecordFirst';
import RecordSecond from '../screens/Recording/RecordSecond';
import RecordThree from '../screens/Recording/RecordThree';
import RecordFour from '../screens/Recording/RecordFour';
import RecordFive from '../screens/Recording/RecordFive';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
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
  const colorScheme = useColorScheme();
  const iconSize = 30;

  return (
    <BottomTab.Navigator
      initialRouteName="Diary"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Diary"
        component={DiaryScreen}
        options={({ navigation }: RootTabScreenProps<'Diary'>) => ({
          title: 'Diary',
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign name="book" color={color} size={iconSize} />,
        })}
      />
      <BottomTab.Screen
        name="Skills"
        component={LoginScreen}
        options={{
          title: 'Skills',
          headerShown: false,
          tabBarIcon: ({ color }) => <Foundation name="social-skillshare" color={color} size={iconSize} />,
        }}
      />
       <BottomTab.Screen
        name="Recording"
        component={RecordingNavigator}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ color }) => <Feather name="edit-2" color={color} size={iconSize+5} />,
        }}
      />
       <BottomTab.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About',
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
          tabBarIcon: ({ color }) => <Ionicons name="ios-person-outline" color={color} size={iconSize} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
 const RecordingStack = createNativeStackNavigator<RecordingStackParamList>();

 function RecordingNavigator() {
   return (
    <RecordingStack.Navigator>
      <RecordingStack.Group screenOptions={{headerShown: false}}>
        <RecordingStack.Screen name='RecordFirst' component={RecordFirst} />
        <RecordingStack.Screen name='RecordSecond' component={RecordSecond} />
        <RecordingStack.Screen name='RecordThree' component={RecordThree} />
        <RecordingStack.Screen name='RecordFour' component={RecordFour} />
        <RecordingStack.Screen name='RecordFive' component={RecordFive} />
      </RecordingStack.Group>
    </RecordingStack.Navigator>
   );
 }
