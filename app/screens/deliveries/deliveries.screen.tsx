import React from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { Card } from "react-native-paper";
import { HeaderComponent } from "../../components/header/header.component";
import { DeliveriesStyle } from "./deliveries.style";

const DeliveriesScreen = () => {

  const deliveries: number[] = [1, 2, 3];
  
  return (
    <SafeAreaView>
      <HeaderComponent title="Minhas entregas" hasBackButton={true}></HeaderComponent>
        <FlatList
          data={deliveries}
          keyExtractor={(item, index) => `deliveries${index}`}
          renderItem={({item, index}) =>
            <Card style={{...DeliveriesStyle.card, ...DeliveriesStyle.cardStatus}}>
              <Card.Cover
                source={{uri:"https://fiorecommunications.com/wp-content/uploads/2019/02/image-maps.jpg"}}
              />
              <Card.Title 
                title="01/02/2021"
                subtitle="Entregas por nome"
                titleStyle={DeliveriesStyle.cardTitle}
                right={()=>
                  <Text style={DeliveriesStyle.price}>R$ 30.00</Text>
                }
              />
            </Card>
          }/>
    </SafeAreaView>
  );
}

export default DeliveriesScreen;

