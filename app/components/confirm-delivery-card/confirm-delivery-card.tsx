import React from "react";
import { View } from "react-native";
import { Button, Card, IconButton, List } from "react-native-paper";
import { ConfirmDeliveryCardStyle } from "./confirm-delivery-card-style";


export const ConfirmDeliveryCardComponent = () => {
  
  return (
    <Card>
      <Card.Content>
        <List.Item
          title="R$ 15.00"
          description="Total da corrida"
          left ={() => 
            <IconButton
              icon="bike"
              size={30} />
          }
          right={() =>
            <View>
              <Button style={ConfirmDeliveryCardStyle.button}>Cancelar</Button>
              <Button mode="contained" style={ConfirmDeliveryCardStyle.button}>Confirmar</Button>
            </View>
          }/>
      </Card.Content>
    </Card>
  );

}