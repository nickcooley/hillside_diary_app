import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeMsg}>Welcome...</Text>
      <View style={styles.profileContainer}>
        <View style={styles.profileRow}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name={'face-profile'} size={100} />
          </View>
          <View style={{paddingHorizontal: 15}}/>
          <View style={styles.piContainer}>
            <Text style={styles.fName}>John</Text> 
            <Text style={styles.lName}>Smith</Text> 
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.light.primary,
    paddingTop: 30,
  },
  welcomeMsg: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 10,
  },
  profileContainer: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
  },
  profileRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
  },
  iconContainer: {
    paddingLeft: 10,
  },
  piContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  fName: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  lName: {
    fontSize: 20,
    color: 'gray'
  }
});
