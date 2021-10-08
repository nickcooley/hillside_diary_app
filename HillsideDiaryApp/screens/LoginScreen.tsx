import * as React from 'react';
import { StyleSheet, TextInput, Button,  Text, View } from 'react-native';


const LoginScreen = (props: Object) => {
    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const loginMethod = props.loginHandler;
  const AttemptLogin = () => {
    console.log(props)
    props.controlLoginMethod(true)
    return true
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Login Info</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" >
      <Text>Username: </Text>
      <TextInput style={styles.input}  value={username} onChangeText={onChangeUsername} />
      <Text>Password: </Text>
      <TextInput style={styles.input} secureTextEntry={true} value={password} onChangeText={onChangePassword}  />
          <Button title="Log In" onPress={AttemptLogin} />
          </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '130px'
  },
  input: {
    border: '1px solid black',
    padding: '20px',
    margin: '20px'
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


export default LoginScreen;