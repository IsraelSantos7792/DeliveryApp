import React from "react";
import { SafeAreaView, View } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { loginStyle } from "./login.style";

export const LoginScreen = () => {


  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.view}>
        <Card>
          <Card.Title title="HapuqueZarini" titleStyle={loginStyle.cardTitle}></Card.Title>
          <Card.Content>
            <TextInput label="Email" keyboardType="email-address"></TextInput>
            <TextInput label="Senha" secureTextEntry={true}></TextInput>
            <Button uppercase={false} style={loginStyle.cardButton}>Esqueceu a senha/email?</Button>
            <Button uppercase={true} mode="contained" style={loginStyle.cardButton}>Login</Button>
            <Button uppercase={true} style={loginStyle.cardButton}>Registre-se</Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  )
}

