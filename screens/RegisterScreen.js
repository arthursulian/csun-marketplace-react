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

function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.csunLogo}>
        <Image source={require("../app/assets/csun_logo_center_again.png")} />
        <Text style={styles.csunLogoText}>Marketplace</Text>
        <Text style={styles.csunLogoText}>Registration</Text>
      </View>
      <View style={styles.registerField}>
        <Text> CSUN email required to register</Text>
        <TextInput style={styles.register} placeholder="CSUN Email"></TextInput>
        <TextInput style={styles.register} placeholder="User Name"></TextInput>
        <TextInput
          secureTextEntry={true}
          style={styles.register}
          placeholder="Password"
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          style={styles.register}
          placeholder="Confirm Password"
        ></TextInput>
      </View>
      <View style={styles.registerBtn}>
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
}

//Styles should be fixed via Bootstrap later
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
  registerField: {
    //position: "absolute",
    top: "80%",
  },
  register: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  registerBtn: {
    top: "90%",
    width: "50%",
    alignSelf: "center",
  },
});

export default RegisterScreen;
