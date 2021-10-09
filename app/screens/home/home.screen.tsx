import React from "react";
import { SafeAreaView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FAB, Title } from "react-native-paper";
import { homeStyle } from "./home.style";


const HomeScreen = () => {
  return (
    <SafeAreaView style={homeStyle.flex}>
      <MapView
        style={{flex: 1}}
        initialRegion = {{
          latitude:-23.164157,
          longitude:-47.731555,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}>
        <Marker 
          description="Delivery person 1"
          coordinate={{latitude:-23.164159, longitude:-47.731555}}
        />
      </MapView>
      <FAB 
        style={homeStyle.fab}
        icon="plus" 
      />
    </SafeAreaView>
  )
}


export default HomeScreen;