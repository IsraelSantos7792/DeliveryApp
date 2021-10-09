import { StyleSheet } from "react-native";
import { theme } from "../../../App.style";

export const DeliveryStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  cartTitle: {
    color: theme.colors.primary,
  },
  price: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    marginEnd: 15,
  }
})