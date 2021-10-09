import React from "react"; 
import { SafeAreaView, View } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";
import { HeaderComponent } from "../../components/header/header.component";
import { AddressStyle } from "./address.style";

const AddressScreen = () => {

  const destinations: number[] = [1 , 2];

  return (
    <SafeAreaView>
      <HeaderComponent 
        title="Endereço"
        hasBackButton={true} />
      <View style={AddressStyle.marginHorizontal}>
        <TextInput 
          label="Origem"/>
          {
            destinations.map((destination: number, index: number) =>
              <TextInput 
                key={`destination${index}`}
                label="Destino"
                right={
                  destinations.length > 1 ?
                  <TextInput.Icon
                    name="close"
                    color={AddressStyle.buttonIconClose.color}
                    style={AddressStyle.buttonIconClose} />
                    : null
                }
              />
            )
          }

        
      </View>
      <View>
        <Button
          icon="plus"
          style={AddressStyle.buttonIconAdd}
          labelStyle={AddressStyle.buttonIconAddLabelStyle}
          >
        </Button>
      </View>
      <Button
        mode="contained"
        uppercase={false}
        style={AddressStyle.readyButtonStyle}
        >
        Pronto
      </Button>

    </SafeAreaView>
  )
}

export default AddressScreen;