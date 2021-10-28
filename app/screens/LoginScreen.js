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
import RegisterScreen from "./RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#D22030" />
      <View style={styles.csunLogo}>
        <Image source={require("../assets/csun_logo_center_again.png")} />
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
      <View style={styles.navButtons}>
        <Button
          title="Log In"
          color="#D22030"
          onPress={() => navigation.navigate("Feed")}
        />
      </View>
      <View style={styles.navButtons}>
        <Button
          title="Register"
          color="#D22030"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      <View style={styles.navButtons}>
        <Button
          title="Sample User Profile"
          color="#D22030"
          onPress={() => navigation.navigate("Profile")}
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
    top: "90%",
  },
  login: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  navButtons: {
    alignSelf: "center",
    top: "100%",
    width: "50%",
    marginVertical: 8,
  },
});

export default LoginScreen;
