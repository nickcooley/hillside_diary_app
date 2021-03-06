import * as React from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { RootTabScreenProps, User } from '../types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useState } from 'react';
import globals from '../global/globals';
import apiConfigs from '../global/apiConfig';
import axios from 'axios';
import { useEffect } from 'react';
import moment from 'moment';
import * as SecureStore from 'expo-secure-store';
import { useAuth } from '../contexts/Auth';


export default function ProfileScreen({navigation}: RootTabScreenProps<'Profile'>) {

  const {colors} = useTheme();
  let [readyForRender, setReadyForRender] = useState(false);
  let [myProfile, setProfile] = useState<User>();
  const auth = useAuth();

  const signOff = () => {
    auth.signOut();
  }

  async function collectUserInfo(key:string) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        const accessTok = "Bearer " + result;
        axios({
          "method": "GET",
          "url": globals.apiCalls.myProfileURi,
          "headers": {
            "Authorization": accessTok,
          }, "params": {
          }
        })
          .then((response) => {
            setProfile(response.data);
            setReadyForRender(true);
          })
          .catch((error) => {
            console.log(error)
          })
    } else {
        alert('No values stored under that key.');
    }
}

  const formatPhoneNumber = (phoneNumberString: string) => {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = (match[1] ? '+1 ' : '');
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
  }

  useEffect(() => {
    collectUserInfo('access');
  }, []);


  if (readyForRender && myProfile) {
    return (
      <SafeAreaView style={[styles.container, {backgroundColor: colors.primary}]}>
        <View style={styles.header}>
          <Text style={styles.welcomeMsg}>Welcome</Text>
          <TouchableOpacity onPress={signOff}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: 'white', fontSize: 18, paddingRight: 10}}>Sign Out</Text>
              <AntDesign name="logout" size={25} color={"white"}/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileRow}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name={'face-profile'} size={100} />
            </View>
            <View style={{paddingHorizontal: 15}}/>
            <View style={styles.piContainer}>
              <Text style={styles.fName}>{myProfile.first_name}</Text> 
              <Text style={styles.lName}>{myProfile.last_name}</Text> 
            </View>
          </View>
        </View>
        <Text style={styles.infoMsg}>About Me</Text>
        <View style={styles.infoContainer}>
          <View style={styles.valueContainer}>
            <View style={styles.labelContainer}>
              <View style={[styles.horz]} />
              <View style={styles.attrContainer}>
                  <Text style={[styles.textLabel]}>Date Joined</Text>
              </View>
              <View style={[styles.horz]} />
            </View>
            <View>
              <Text style={{textAlign: 'center', color: 'gray'}}>{moment(myProfile.date_joined).format("MMMM DD,YYYY")}</Text>
            </View>
          </View>
          <View style={styles.valueContainer}>
            <View style={styles.labelContainer}>
              <View style={[styles.horz]} />
              <View style={styles.attrContainer}>
                  <Text style={[styles.textLabel]}>Email</Text>
              </View>
              <View style={[styles.horz]} />
            </View>
            <View>
              <Text style={{textAlign: 'center', color: 'gray'}}>{myProfile.email}</Text>
            </View>
          </View>
          <View style={styles.valueContainer}>
            <View style={styles.labelContainer}>
              <View style={[styles.horz]} />
              <View style={styles.attrContainer}>
                  <Text style={[styles.textLabel]}>Phone</Text>
              </View>
              <View style={[styles.horz]} />
            </View>
            <View>
              <Text style={{textAlign: 'center', color: 'gray'}}>{formatPhoneNumber(myProfile.phone_number)}</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    paddingBottom: 5
  },
  welcomeMsg: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
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
  valueContainer: {
    paddingBottom: 10,
  },
  fName: {
    fontSize: 31,
    fontWeight: 'bold'
  },
  lName: {
    fontSize: 24,
    color: 'gray'
  },
  infoMsg: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  infoContainer: {
    marginVertical: 15,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 20,
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
