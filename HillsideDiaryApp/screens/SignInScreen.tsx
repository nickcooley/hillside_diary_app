import { Theme, useTheme } from '@react-navigation/native';
import * as React from 'react';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, Dimensions, SafeAreaView } from 'react-native';
import { Tab, TabView } from 'react-native-elements';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

export type PropObj = {
    loginHandler: Boolean,
    controlLoginMethod: React.Dispatch<React.SetStateAction<boolean>>
}  

export default function SignInScreen (props: PropObj) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  let [index, setIndex] = useState(0);
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = props.loginHandler;
  const setIsUserLoggedIn = props.controlLoginMethod;


  return ( 
    <SafeAreaView style={styles.container}>
        <Tab value={index} onChange={setIndex} indicatorStyle={{backgroundColor: 'white',height: 3,}} style={{backgroundColor: 'red'}}>
            <Tab.Item title="Login" titleStyle={styles.tabTitle}/>
            <Tab.Item title="Register" titleStyle={styles.tabTitle}/>
        </Tab>

        <TabView value={index} onChange={setIndex} >
            <TabView.Item style={{flex: 1, paddingTop: 25}}>
                <LoginScreen loginHandler={loginHandler} controlLoginMethod={setIsUserLoggedIn}/>
            </TabView.Item>
            <TabView.Item style={{flex: 1, paddingTop: 25}}>
                <RegisterScreen/>
            </TabView.Item>
        </TabView>
    </SafeAreaView>
  );
}

const createStyles = (theme: Theme) => 
StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.primary,
  },
  tabTitle: {
      color: 'white'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  bubbleHeaderContainer: {
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center'
  },
  signUp: {
    color: 'white',
    fontSize: 18,
  },
  logo: {
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
    padding: 20,
    margin: 20
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'white',
    paddingTop: 15,
    fontSize: 22,
  },
  fieldHeader: {
    color: 'white',
    paddingLeft: Dimensions.get('screen').width / 20
  },
  separator: {
    marginVertical: 15,
    width: Dimensions.get('screen').width - 50,
  },
  bubbleContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center' 
  },  
  button: {
    width: Dimensions.get('screen').width - 60,
    height: Dimensions.get('screen').width / 8,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'black',
    color: 'white',
  }
});
