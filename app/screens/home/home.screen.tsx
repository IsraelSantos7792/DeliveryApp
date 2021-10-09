import { classDeclaration } from "@babel/types";
import React from "react";
import { SafeAreaView, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { ActivityIndicator, Button, Card, FAB, IconButton, List, Title } from "react-native-paper";
import { ConfirmDeliveryCardComponent } from "../../components/confirm-delivery-card/confirm-delivery-card";
import { ConfirmDeliveryCardStyle } from "../../components/confirm-delivery-card/confirm-delivery-card-style";
import { HeaderComponent } from "../../components/header/header.component";
import { SearchDeliveryComponent } from "../../components/search-delivery/search-delivery-component";
import { homeStyle } from "./home.style";


const HomeScreen = () => {

  const state: number = 1

  return (
    <SafeAreaView style={homeStyle.flex}>
      <HeaderComponent title="Delivery App" />
        <MapView
          style={{flex: 1}}
          initialRegion = {{
            latitude:-23.164157,
            longitude:-47.731555,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}>
          {
            state == 1 ?
            <Marker 
              description="Delivery person 1"
              coordinate={{latitude:-23.164159, longitude:-47.731555}}
            />
            : null
          }
        </MapView>
          { 
            state == 1 ?
            <FAB 
              style={homeStyle.fab}
              icon="plus" 
            />
            : null
          }
          {
            state == 2 ?
              <ConfirmDeliveryCardComponent />
            : null
          }
          {
            state == 3 ?
            <SearchDeliveryComponent />
            : null
          }
    </SafeAreaView>
  )
}


export default HomeScreen;