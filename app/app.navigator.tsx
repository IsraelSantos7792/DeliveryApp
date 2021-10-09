import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/login/login.screen";
import HomeScreen from "./screens/home/home.screen";
import RegisterScreen from "./screens/register/register.screen";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
  return(
    <NavigationContainer >
      <Navigator initialRouteName="login">
        <Screen name="login" component={LoginScreen}></Screen>
        <Screen name="home" component={HomeScreen}></Screen>
        <Screen name="register" component={RegisterScreen}></Screen>
        
      </Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;