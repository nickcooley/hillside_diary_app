import { Theme, useTheme } from '@react-navigation/native';
import * as React from 'react';
import { useMemo, useState } from 'react';
import { StyleSheet, TextInput, Text, View, Image, Dimensions, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackScreenProps } from '../types';


export default function RegisterScreen (props: Object, { navigation }: RootStackScreenProps<'Register'>) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [fName, onChangefName] = useState("");
  const [lName, onChangelName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [pNum, onChangePNum] = useState("");
  const [username, onChangeUsername] = useState("");
  const [password, onChangePassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const loginMethod = props.loginHandler;

  const AttemptLogin = () => {
    //props.controlLoginMethod(true)
    return true
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subTitle}>Please provide your info</Text>
        <View style={{paddingTop: 20, alignItems: 'center'}}>
            <View style={styles.separator}>
                <Text style={styles.fieldHeader}>First Name: </Text>
                <TextInput style={styles.input}  value={fName} onChangeText={onChangefName} />
                <Text style={styles.fieldHeader}>Last Name: </Text>
                <TextInput style={styles.input} value={lName} onChangeText={onChangelName}  />
                <Text style={styles.fieldHeader}>Email: </Text>
                <TextInput style={styles.input}  value={email} onChangeText={onChangeEmail} />
                <Text style={styles.fieldHeader}>Phone Number: </Text>
                <TextInput style={styles.input}  value={pNum} onChangeText={onChangePNum} />
                <Text style={styles.fieldHeader}>Username: </Text>
                <TextInput style={styles.input}  value={username} onChangeText={onChangeUsername} />
                <Text style={styles.fieldHeader}>Password: </Text>
                <TextInput style={styles.input} secureTextEntry={true} value={password} onChangeText={onChangePassword}  />
            </View>
            <View style={styles.bubbleContainer}>
            <Button buttonStyle={styles.button} title="Sign-Up" onPress={AttemptLogin} />
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (theme: Theme) => 
StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 130
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
    borderColor: '#e3e3e3',
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    margin: 20
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#e3e3e3',
    paddingTop: 15,
    fontSize: 20,
  },
  fieldHeader: {
    color: theme.colors.primary,
    fontSize: 18,
    paddingLeft: Dimensions.get('screen').width / 20
  },
  separator: {
    backgroundColor: 'white',
    marginVertical: 15,
    width: Dimensions.get('screen').width - 40,
    paddingVertical: 20,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  bubbleContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center' 
  },  
  button: {
    width: Dimensions.get('screen').width - 30,
    height: Dimensions.get('screen').width / 8,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'black',
    color: 'white',
  }
});
