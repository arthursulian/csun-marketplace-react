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
import { useState } from "react";
import { color } from "react-native-reanimated";

function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState("false");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("false");

  const checkCSUNEmail = (text) => {
    // Stole this regex from Google, checks the user's input for valid email characters and also checks the domain to be @csun.edu
    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(text)) {
      if (text.indexOf("@csun.edu", text.length - "@csun.edu".length) !== -1) {
        //VALID
        setEmailIsValid(true);
        console.log("VALID");
      } else {
        setEmailIsValid(false);
      }
    } else {
      setEmailIsValid(false);
    }
    setEmail(text);
  };

  const checkConfirmPassword = (text) => {
    setConfirmPassword(text);
    if (password == confirmPassword) {
      console.log("Nice");
      setPasswordMatch("true");
    } else {
      setPasswordMatch("false");
    }
  };

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
        <TextInput
          style={styles.register}
          placeholder="CSUN Email"
          value={email}
          onChangeText={checkCSUNEmail}
        />
        {!emailIsValid && (
          <Text style={styles.invalid}> Email must be an @csun.edu email</Text>
        )}
        <TextInput
          secureTextEntry={true}
          style={styles.register}
          placeholder="Create Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.register}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={checkConfirmPassword}
        />
        {!passwordMatch && (
          <Text style={styles.invalid}> Passwords must match</Text>
        )}
      </View>
      <View style={styles.registerBtn}>
        <Button
          color="#D22030"
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
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  registerBtn: {
    top: "90%",
    width: "50%",
    alignSelf: "center",
  },
  invalid: {
    color: "red",
  },
});

export default RegisterScreen;
