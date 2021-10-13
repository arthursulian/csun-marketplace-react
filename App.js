import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  //console.log("app executed");
  return (
    // <View style={styles.container}>
    //   <Text>hello arthur</Text>
    //   <StatusBar style="auto" />
    // </View>
    <LoginScreen />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
