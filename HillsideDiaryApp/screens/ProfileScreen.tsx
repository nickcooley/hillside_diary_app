import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { Button } from 'react-native-elements/dist/buttons/Button';

export default function ProfileScreen() {

  const {colors} = useTheme();

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.primary}]}>
      <Text style={styles.welcomeMsg}>Welcome</Text>
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
      <View style={styles.infoContainer}>
        <View>
          <View style={styles.labelContainer}>
            <View style={[styles.horz]} />
            <View style={styles.attrContainer}>
                <Text style={[styles.textLabel]}>Name</Text>
            </View>
            <View style={[styles.horz]} />
          </View>
          <View>
            <Text style={{textAlign: 'center', color: 'gray'}}>John Smith</Text>
          </View>
        </View>
        <View>
          <View style={styles.labelContainer}>
            <View style={[styles.horz]} />
            <View style={styles.attrContainer}>
                <Text style={[styles.textLabel]}>Email</Text>
            </View>
            <View style={[styles.horz]} />
          </View>
          <View>
            <Text style={{textAlign: 'center', color: 'gray'}}>example@hotmail.com</Text>
          </View>
        </View>
        <View>
          <View style={styles.labelContainer}>
            <View style={[styles.horz]} />
            <View style={styles.attrContainer}>
                <Text style={[styles.textLabel]}>Phone</Text>
            </View>
            <View style={[styles.horz]} />
          </View>
          <View>
            <Text style={{textAlign: 'center', color: 'gray'}}>(516) 555-5555</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Edit' titleStyle={styles.button}/>
        <Button title='Logout' titleStyle={styles.button}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 30,
  },
  welcomeMsg: {
    color: 'white',
    fontSize: 35,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 10,
  },
  profileContainer: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white'
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
    fontSize: 31,
    fontWeight: 'bold'
  },
  lName: {
    fontSize: 24,
    color: 'gray'
  },
  infoContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 10,
  },
  horz: {
    flex: 1,
    height: 1,
    backgroundColor: 'black'
  },
  attrContainer: {
    paddingVertical: 10,
    alignItems: "center",
  },
  textLabel: {
    marginHorizontal: 5,
    fontWeight: "bold",
    color: 'black'
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: '90%'
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    marginHorizontal: 10,
    paddingVertical: 10,
    width: Dimensions.get('screen').width/2.4,
  },
});
