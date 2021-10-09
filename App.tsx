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
import AppNavigator from './app/app.navigator';
import AddressScreen from './app/screens/address/address.screen';
import DeliveriesScreen from './app/screens/deliveries/deliveries.screen';
import DeliveryScreen from './app/screens/delivery/delivery.screen';
import HomeScreen from './app/screens/home/home.screen';
import LoginScreen  from './app/screens/login/login.screen';
import RegisterScreen from './app/screens/register/register.screen';

const App = () => {

  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
      {/* <LoginScreen/> */}
      {/* <RegisterScreen/> */}
      {/* <HomeScreen /> */}
      {/* <AddressScreen /> */}
      {/* <DeliveryScreen /> */}
      {/* <DeliveriesScreen /> */}
    </PaperProvider>
    
  );
};


export default App;
