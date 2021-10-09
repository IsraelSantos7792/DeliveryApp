import React from "react";
import { View } from "react-native";
import { ActivityIndicator, Button, Title } from "react-native-paper";
import { SearchDeliveryStyle } from "./search-delivery-style";

export const SearchDeliveryComponent = () => {
  return (
    <View style={SearchDeliveryStyle.flexcentercolumn}>
      <ActivityIndicator 
        animating={true} />
      <Title 
        style={{
          margin: 20, 
          marginTop: 30,
          textAlign: "center",}}
        >
        Buscando entregador na região</Title>
      <Button
        mode="contained"
        style={SearchDeliveryStyle.canceldeliverybutton}  
      >
        Cancelar
      </Button>
  </View>
  );
}