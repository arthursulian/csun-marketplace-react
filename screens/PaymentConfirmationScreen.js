import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function PaymentConfirmationScreen(props) {
  return (
    <View style={styles.container}>
      <Feather name="check" size={99} color="grey" />
      <Text style={styles.confirmation}>Payment Confirmed</Text>
      <Text style={styles.confirmation}>Thank You!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmation: {
    fontSize: 20,
    color: "grey",
    fontWeight: "bold",
  },
});

export default PaymentConfirmationScreen;
