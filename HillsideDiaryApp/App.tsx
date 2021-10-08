import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Appearance } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useLoginService from "./hooks/useLoginService";
import Navigation from "./navigation";
import LoginScreen from "./screens/LoginScreen";
import useColorScheme from "./hooks/useColorScheme";

const App = () => {
  const isLoadingComplete = useCachedResources();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const colorScheme = useColorScheme();
  const loginHandler = useLoginService;

  if (!isLoadingComplete) {
    return null;
  } else {
    if (isUserLoggedIn) {
      return (
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      );
    }
    else {
      return (
        <SafeAreaProvider>
          <LoginScreen loginHandler={loginHandler} controlLoginMethod={setIsUserLoggedIn}/>
        </SafeAreaProvider>
      )
    }
  }
};

export default App;
