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
import { useSelector } from "react-redux";
import { authenticate } from "../components/HelperMethods";

// begin medium weirdo code
import { useStateValue } from "../state";

const ThemedButton = () => {
  const [{ theme }, dispatch] = useStateValue();

  return (
    <Button
      title="Make me blue!"
      color={theme.primary}
      onPress={() =>
        dispatch({
          type: "changeTheme",
          newTheme: { primary: "blue" },
        })
      }
    />
  );
};
// end medium weirdo code

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authStatus, setAuthStatus] = useState("true");

  const logIn = () => {
    let userExists = authenticate(email, password);
    if (userExists == false) {
      console.log(":(");
      setAuthStatus(false);
    } else {
      console.log("Welcome, " + userExists.name);

      navigation.navigate("Feed");
    }

    //navigation.navigate("Feed", {loggedIn: this.state.});
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
            onChangeText={(text) => setEmail(text)}
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
          {!authStatus && (
            <Text style={styles.invalid}> Passwords must match</Text>
          )}
        </View>
        <View style={styles.navButtons}>
          <Button color="#D22030" title="Log In" onPress={logIn} />
        </View>
        <View style={styles.navButtons}>
          <Button
            color="#D22030"
            title="Register"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
        {/* <ThemedButton /> */}
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
  invalid: {
    color: "red",
  },
});

export default LoginScreen;
