import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Theme, useTheme } from '@react-navigation/native';
import axios from 'axios';
import * as React from 'react';
import { useContext, useMemo, useState } from 'react';
import { StyleSheet, TextInput, Text, View, Image, Dimensions, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import globals from '../global/globals';
import { RootStackScreenProps } from '../types';
import * as SecureStore from 'expo-secure-store';
import useLoginService from '../hooks/useLoginService';
import { useAuth } from '../contexts/Auth';
import { ScrollView } from 'react-native-gesture-handler';


export type PropObj = {
  loginHandler: Boolean,
  controlLoginMethod: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function LoginScreen (props: PropObj, { navigation }: RootStackScreenProps<'Login'>) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [failedLogin, setFailedMsg] = useState(false);
  const loginMethod = props.loginHandler;

  const [loading, isLoading] = useState(false);
  const auth = useAuth();

  async function save(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
  }

  const AttemptLogin = () => {
    var bodyFormData = new FormData();
    bodyFormData.append('email', email);
    bodyFormData.append('password', password);
    axios({
      method: "post",
      url: globals.apiCalls.loginURi,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(async function (response) {
        //handle success
        save('access', response.data['access']);
        save('refresh', response.data['refresh']);
        isLoading(true);
        await auth.signIn();
      })
      .catch(function (response) {
        //handle error
        setFailedMsg(true);
        console.log(response);
      });
  }

  async function signIn() {
    isLoading(true);
    await auth.signIn();
  }

  const toggleMsg = () => {
    setFailedMsg(false);
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom: 250}}>
          <View style={{alignItems: 'center'}}>
            <Image style={styles.logo} source={require('../assets/images/HillsideLogo.png')}/>
            <Text style={styles.title}>Hillside</Text>
            <Text style={styles.subTitle}>Proceed with your Login</Text>
          </View>
          <View style={{paddingTop: 20}}>
            <View style={styles.separator}>
              {failedLogin ? 
                <View style={styles.warningToast}>
                  <MaterialIcons name="error" color="white" size={20} />
                  <Text style={styles.warningText}>Incorrect Email and/or Password</Text>
                  <TouchableWithoutFeedback onPress={toggleMsg}>
                    <AntDesign name="close" color="white" size={20} style={styles.closeIcon} />
                  </TouchableWithoutFeedback>
                </View>
              : null}
              <Text style={styles.fieldHeader}>Email: </Text>
              <TextInput style={styles.input}  value={email} onChangeText={onChangeEmail} />
              <Text style={styles.fieldHeader}>Password: </Text>
              <TextInput style={styles.input} secureTextEntry={true} value={password} onChangeText={onChangePassword}  />
            </View>
            <View style={styles.bubbleContainer}>
              <Button buttonStyle={styles.button} title="Log In" onPress={AttemptLogin} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (theme: Theme) => 
StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    paddingTop: 50,
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
  warningToast: {
    flexDirection: 'row',
    backgroundColor: '#ff2626',
    marginHorizontal: Dimensions.get('screen').width / 20,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center'
  },
  warningText: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 15
  },
  closeIcon: {
    alignItems:'flex-end',
    paddingLeft: 10
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#e3e3e3',
    paddingTop: 15,
    fontSize: 22,
  },
  fieldHeader: {
    color: 'white',
    fontSize: 18,
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
