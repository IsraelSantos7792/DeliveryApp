import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { theme } from './App.style';
import HomeScreen from './app/screens/home/home.screen';
import { LoginScreen } from './app/screens/login/login.screen';
import { RegisterScreen } from './app/screens/register/register.screen';

const App = () => {

  return (
    <PaperProvider theme={theme}>
      {/* <LoginScreen/> */}
      {/* <RegisterScreen/> */}
      <HomeScreen />
    </PaperProvider>
    
  );
};


export default App;
