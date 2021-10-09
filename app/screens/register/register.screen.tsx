import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Appbar,Button,TextInput } from "react-native-paper";
import { HeaderComponent } from "../../components/header/header.component";
import { registerStyle } from "./register.style";

interface RegisterScreenProps {
  navigation: any;
}


const RegisterScreen = (props: RegisterScreenProps) => {

  const register = () => props.navigation.navigate("home")

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
          <Button mode="contained" style={registerStyle.button} onPress={register}>Registrar</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

}

export default RegisterScreen;

// TODO VIDEO MIN 08:00