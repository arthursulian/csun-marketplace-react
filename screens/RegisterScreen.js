import React from "react";
import User from "../models/user";

import {
  Button,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState, useReducer } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { USERS } from "../data/dummy-data";

const formReducer = (state, action) => {
  if (action.type === "UPDATE") {
  }
};

function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState("false");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("false");
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState("");
  const [major, setMajor] = useState("");
  const [createAccount, setCreateAccount] = useState("true");
  /*
  useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {},
    formIsValid: false,
  });
  Figure out reducer shit later
  */

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
    if (password != text) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
    setConfirmPassword(text);
  };

  const checkPassword = (text) => {
    if (confirmPassword != "") {
      if (text != confirmPassword) {
        setPasswordMatch(false);
      } else {
        setPasswordMatch(true);
      }
    }
    setPassword(text);
  };

  const createUser = () => {
    if (emailIsValid && passwordMatch) {
      USERS.push(
        new User(
          "u4",
          email,
          password,
          userName,
          "https://cdn.discordapp.com/attachments/531813317694586892/915497287726284830/kittyhugs.png",
          "Default Text",
          Date.toString,
          0,
          major,
          gender
        )
      );
    } else {
      setCreateAccount(false);
    }
    console.log(USERS);
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image
          style={styles.csunLogo}
          source={require("../app/assets/csun_logo_center_again.png")}
        />
        <Text style={styles.csunLogoText}>Marketplace</Text>
        <Text style={styles.csunLogoText}>Registration</Text>
        <View style={styles.registerField}>
          <Text> CSUN email required to register</Text>
          <TextInput
            style={styles.register}
            placeholder="CSUN Email"
            value={email}
            onChangeText={checkCSUNEmail}
          />
          {!emailIsValid && (
            <Text style={styles.invalid}>
              {" "}
              Email must be an @csun.edu email
            </Text>
          )}
          <TextInput
            style={styles.register}
            placeholder="Name"
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />
          <TextInput
            style={styles.register}
            placeholder="Major"
            value={major}
            onChangeText={(text) => setMajor(text)}
          />
          <TextInput
            style={styles.register}
            placeholder="Gender"
            value={gender}
            onChangeText={(text) => setGender(text)}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.register}
            placeholder="Create Password"
            value={password}
            autoCapitalize={"none"}
            onChangeText={checkPassword}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.register}
            placeholder="Confirm Password"
            value={confirmPassword}
            autoCapitalize={"none"}
            onChangeText={checkConfirmPassword}
          />
          {!passwordMatch && (
            <Text style={styles.invalid}> Passwords must match</Text>
          )}
        </View>
        <View style={styles.registerBtn}>
          <Button color="#D22030" title="Register" onPress={createUser} />
        </View>
        {!createAccount && (
          <Text style={styles.invalid}>
            {!createAccount}
            Issues Must Be Fixed Before Account is Created.
          </Text>
        )}
      </KeyboardAvoidingView>
    </ScrollView>
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
    alignSelf: "center",
  },
  csunLogoText: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  registerField: {
    //position: "absolute",
    //top: "80%",
  },
  register: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  registerBtn: {
    alignSelf: "center",
  },
  invalid: {
    color: "red",
  },
});

export default RegisterScreen;
