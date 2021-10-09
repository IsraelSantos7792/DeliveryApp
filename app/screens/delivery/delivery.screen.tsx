import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import MapView from "react-native-maps";
import { Avatar, Card, List, Title } from "react-native-paper";
import { HeaderComponent } from "../../components/header/header.component";
import { DeliveryStyle } from "./delivery.style";

const DeliveryScreen = () => {
  return(
    <SafeAreaView style={DeliveryStyle.flex}>
      <HeaderComponent 
        title={"Detalhes da entrega"}
        hasBackButton={true}/>

        <View style={DeliveryStyle.flex}>
          <MapView
            initialRegion = {{
              latitude:-23.164157,
              longitude:-47.731555,
              latitudeDelta: 0.09,
              longitudeDelta: 0.04,
            }}
            style={DeliveryStyle.flex}>
          </MapView>
        </View>
        <Card>
          <Card.Title
            title={"01/02/2021"}
            titleStyle={DeliveryStyle.cartTitle}
            right={() => <Text style={DeliveryStyle.price}>R$ 30.00</Text>}/>

          <Card.Content>
            <List.Item
              title={"Israel Santos"}
              description={"26 entregas"}
              left={()=> 
                <Avatar.Image
                  size={52}
                  source={{uri:"https://w7.pngwing.com/pngs/449/734/png-transparent-businessperson-cartoon-man-hand-boy-cartoon-thumbnail.png"}}
                  />
              }
            />
            <List.Item
              title="Origem"
              description="Rua Paraná, 781"
              left={() =>
                <List.Icon icon="flag-outline" />
              }
            />
            <List.Item
              title="Destino"
              description="Avenida Brasil, 602"
              left={() =>
                <List.Icon icon="flag-checkered" />
              }
            />
          </Card.Content>
        </Card>
    </SafeAreaView>
  );
}

export default DeliveryScreen;