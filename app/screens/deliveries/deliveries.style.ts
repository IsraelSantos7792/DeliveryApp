import { StyleSheet } from "react-native";
import { theme } from "../../../App.style";

export const DeliveriesStyle = StyleSheet.create({
  card: {
    margin: 10,
  },
  cardStatus: {
    borderTopWidth: 5,
    borderTopColor: "yellow"
  },
  cardTitle: {
    color: theme.colors.primary,
  },
  price: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    marginEnd: 15,
  },
})