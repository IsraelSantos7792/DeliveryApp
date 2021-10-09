import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Appbar,Button,TextInput } from "react-native-paper";
import { HeaderComponent } from "../../components/header/header.component";
import { registerStyle } from "./register.style";

export const RegisterScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderComponent title="Registre-se" />
        <View style={registerStyle.content}>
          <TextInput label="Nome"/>
          <TextInput label="Email" keyboardType="email-address"/>
          <TextInput label="Senha" secureTextEntry={true} right={<TextInput.Icon name="eye" color={registerStyle.icon.color}/>}/> 
          <TextInput label="Confirmar Senha" secureTextEntry={true} right={<TextInput.Icon name="eye" color={registerStyle.icon.color}/>}/>
          <TextInput label="Telefone" keyboardType="phone-pad"/>
          <Button mode="contained" style={registerStyle.button}>Registrar</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

}