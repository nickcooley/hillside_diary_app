import * as React from 'react';
import { StyleSheet, TouchableOpacity, Platform, SafeAreaView, StatusBar } from 'react-native';
import { Text, View } from '../components/Themed';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
              style={styles.button}
              onPress={() => console.log('Terms of Use')}>
              <Text>Terms of Use</Text>
      </TouchableOpacity>
      <TouchableOpacity
              style={styles.button}
              onPress={() => console.log('Privacy Policy')}>
              <Text>Privacy Policy</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  button:{
    justifyContent: 'center',
    width: '98%',
    height: '10%',
    margin: 4,
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    paddingLeft: 15,
  },
});
