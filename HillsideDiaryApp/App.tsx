import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Appearance } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useLoginService from "./hooks/useLoginService";
import Navigation from "./navigation";
import useColorScheme from "./hooks/useColorScheme";
import RootScreen from "./screens/SignInScreen";
import * as SecureStore from 'expo-secure-store';
import { AuthProvider } from "./contexts/Auth";

const App = () => {

  const isLoadingComplete = useCachedResources();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const colorScheme = useColorScheme();
  const loginHandler = useLoginService(false);


  async function getValueFor(key: string) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      return result
    } else {
      alert('No values stored under that key.');
    }
  }

  // if (!isLoadingComplete) {
  //   return null;
  // } else {
  //   if (isUserLoggedIn) {
  //     return (
  //       <SafeAreaProvider>
  //         <Navigation colorScheme={colorScheme} />
  //         <StatusBar />
  //       </SafeAreaProvider>
  //     );
  //   }
  //   else {
  //     return (
  //       <SafeAreaProvider>
  //         <RootScreen loginHandler={loginHandler} controlLoginMethod={setIsUserLoggedIn}/>
  //       </SafeAreaProvider>
  //     )
  //   }
  // }

  return (
    <AuthProvider>
      <Navigation colorScheme={colorScheme} />
    </AuthProvider>
  )


};

export default App;
