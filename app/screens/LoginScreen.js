import React from "react";
import {
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Linking,
} from "react-native";
import RegisterScreen from "./RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.csunLogo}>
        <Image source={require("../assets/csunlogo.png")} />
        <Text style={styles.csunLogoText}>Marketplace</Text>
      </View>
      <View style={styles.loginField}>
        <TextInput style={styles.login} placeholder="User Name"></TextInput>
        <TextInput
          secureTextEntry={true}
          style={styles.login}
          placeholder="Password"
        ></TextInput>
      </View>
      <View style={styles.logInBtn}>
        <Button title="Log In" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
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
    alignSelf: "center",
    top: "160%",
    width: "50%",
  },
});

export default LoginScreen;
