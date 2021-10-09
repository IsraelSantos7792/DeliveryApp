import React from "react";
import { Appbar, Menu } from "react-native-paper";
import { HeaderStyle } from "./header.style";

export const HeaderComponent = (props: HeaderComponentParams) => {

  return (
    <Appbar>
      {
        props.hasBackButton? 
        <Appbar.BackAction/>
        :
        <Menu 
          visible={true}
          onDismiss={()=>{}}
          anchor={
            <Appbar.Action
              icon="menu"
              color={HeaderStyle.menu.color}
              />
          }>
          
        </Menu>
      }
      <Appbar.Content title={props.title}/>
    </Appbar>
  );
}

interface HeaderComponentParams {
  title: string;
  hasBackButton? : boolean;
};