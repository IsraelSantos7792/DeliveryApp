import { StyleSheet } from "react-native";
import { theme } from "../../../App.style";

export const homeStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 10,
  },
  button: {
    margin: 2,
    marginLeft: 0,
    marginRight: 0,
  },
  flexcentercolumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
  },  
  canceldeliverybutton: {
    position: "absolute",
    margin: "2%",
    bottom: 0,
    width: "70%",
  },
})