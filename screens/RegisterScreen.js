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
import { useNavigation } from "@react-navigation/core";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import { getUniqueUserID } from "../components/HelperMethods";

import { getFormattedDate } from "../components/HelperMethods";

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
  const [validForm, setValidForm] = useState("true");
  const [userExists, setUserExists] = useState(false);

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
      if (
        text.indexOf("@csun.edu", text.length - "@csun.edu".length) !== -1 ||
        text.indexOf("@my.csun.edu", text.length - "@my.csun.edu".length) !== -1
      ) {
        setEmailIsValid(true);
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
    if (email == "" || password == "") {
      setValidForm(false);
    } else if (emailIsValid && passwordMatch) {
      setValidForm(true);
      let id = getUniqueUserID(email);
      if (id == false) {
        setUserExists(true);
      } else {
        setUserExists(false);
        USERS.push(
          new User(
            id,
            email,
            password,
            userName,
            "https://cdn.discordapp.com/attachments/911058579073675284/917592789347336192/unknown.png", // please replace this with something not stolen -> no
            "Default Text",
            getFormattedDate(),
            5,
            major,
            gender
          )
        );
        navigation.navigate("Login");
      }
    } else {
      setCreateAccount(false);
    }
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
              Email must be a @my.csun.edu or @csun.edu email.
            </Text>
          )}
          {userExists && emailIsValid && (
            <Text style={styles.invalid}>
              A user with this email already exists.
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
            <Text style={styles.invalid}> Passwords must match.</Text>
          )}
        </View>
        <View style={styles.registerBtn}>
          <Button color="#D22030" title="Register" onPress={createUser} />
        </View>
        {!createAccount && (
          <Text style={styles.invalid}>
            Issues Must Be Fixed Before Account is Created.
          </Text>
        )}
        {createAccount && !validForm && (
          <Text style={styles.invalid}>
            Email and Password fields cannot be empty.
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
    alignSelf: "center",
  },
});

export default RegisterScreen;
