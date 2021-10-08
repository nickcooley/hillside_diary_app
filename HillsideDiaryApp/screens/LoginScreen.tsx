import * as React from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const LoginScreen = () => {
    const [username, onChangeUsername] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Login Info</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" >
      <Text>Username: </Text>
      <TextInput style={styles.input}  value={username} />
      <Text>Password: </Text>
      <TextInput style={styles.input} value={password}  />
          <Button title="Log In" />
          </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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