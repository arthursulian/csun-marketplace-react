import React from "react";
import {
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.csunLogo}>
        <Image source={require("../assets/csunlogo.png")} />
        <Text style={styles.csunLogoText}>Marketplace</Text>
      </View>
      <View style={styles.loginField}>
        <TextInput style={styles.login} placeholder="User Name"></TextInput>
        <TextInput style={styles.login} placeholder="Password"></TextInput>
      </View>
      <View style={styles.logInBtn}>
        <Button title="Log In" />
        <Button title="Register" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //alignContent: "center",
    //justifyContent: "center",
  },
  csunLogo: {
    position: "absolute",
    alignSelf: "center",
    top: 60,
  },
  csunLogoText: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  loginField: {
    //position: "absolute",
    top: "150%",
  },
  login: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  logInBtn: {
    top: "160%",
    width: "50%",
  },
});

export default LoginScreen;
