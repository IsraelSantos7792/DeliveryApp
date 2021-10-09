import React from "react";
import { Alert, SafeAreaView, View } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { loginStyle } from "./login.style";

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen = (props: LoginScreenProps) => {
  
    const login = () => props.navigation.navigate("home")
    const register = () => props.navigation.navigate("register")

  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.view}>
        <Card>
          <Card.Title 
            title="Delivery App" 
            titleStyle={loginStyle.cardTitle}>
          </Card.Title>
          <Card.Content>
            <TextInput 
              label="Email" 
              keyboardType="email-address">
            </TextInput>
            <TextInput 
              label="Senha" 
              secureTextEntry={true}>              
            </TextInput>
            <Button 
              uppercase={false} 
              style={loginStyle.cardButton}>
                Esqueceu a senha/email?
            </Button>
            <Button 
              onPress={login}
              uppercase={true} 
              mode="contained" 
              style={loginStyle.cardButton}>
                Login
            </Button>
            <Button 
              onPress={register}
              uppercase={true} 
              style={loginStyle.cardButton}>
                Registre-se
            </Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen;