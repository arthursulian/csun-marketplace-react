import React, { useState } from "react";
import {
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState("false");
  const [password, setPassword] = useState("");

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
    }
    setEmail(text);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#D22030" />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../app/assets/csun_logo_center_again.png")}
        />
        <Text style={styles.csunLogoText}>Marketplace</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.loginField}
            placeholder="Email"
            value={email}
            onChangeText={checkCSUNEmail}
          ></TextInput>
        </View>
        <View style={styles.loginContainer}>
          <TextInput
            secureTextEntry={true}
            style={styles.loginField}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
        </View>
        <View style={styles.navButtons}>
          <Button
            color="#D22030"
            title="Log In"
            onPress={() => navigation.navigate("Feed")}
          />
        </View>
        <View style={styles.navButtons}>
          <Button
            color="#D22030"
            title="Register"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //Entire view container
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  //View containing logo and marketplace text
  logoContainer: {
    padding: 60,
    paddingTop: 60,
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    marginBottom: 30,
  },
  //Logo image
  logo: {
    padding: 30,
    paddingTop: 30,
    marginTop: 30,
  },
  //Marketplace text under logo
  csunLogoText: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  //view containing login fields and buttons
  body: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    position: "relative",
  },
  //view containing login fields
  loginContainer: {
    padding: 10,
  },
  //The login TextInput objects
  loginField: {
    borderWidth: 1,
    padding: 10,
  },
  //The Views containing the buttons
  navButtons: {
    alignSelf: "center",
    color: "#D22030",
    paddingTop: 5,
  },
});

export default LoginScreen;
