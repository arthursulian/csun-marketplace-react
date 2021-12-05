import React, { useState } from "react";
import GlobalStyles from "../components/GlobalStyles";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function BillingScreen({ navigation }) {
  const [cardNum, setCardNum] = useState("");
  const [expDate, setExpDate] = useState("");
  const [secCode, setSecCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [cityState, setCityState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [formFilled, setFormFilled] = useState(true);

  const checkFormFilled = (text) => {
    if (
      cardNum != "" &&
      expDate != "" &&
      secCode != "" &&
      firstName != "" &&
      lastName != "" &&
      address != "" &&
      cityState != "" &&
      zipCode != "" &&
      country != ""
    ) {
      setFormFilled(true);
      navigation.navigate("Payment Confirmation");
    } else {
      setFormFilled(false);
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={GlobalStyles.Centeredcontainer}>
        {/* style={GlobalStyles.inputFields} */}
        <Text style={GlobalStyles.header}>Card Info</Text>
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Card Number"
          value={cardNum}
          onChangeText={(text) => setCardNum(text)}
        ></TextInput>
        {/* <Text style={GlobalStyles.header}>Expiration (MM/YYYY)</Text> */}
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Expiration Date (MM/YYYY)"
          value={expDate}
          onChangeText={(text) => setExpDate(text)}
        ></TextInput>
        {/* <Text style={GlobalStyles.header}>Security Code</Text> */}
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Security Code"
          value={secCode}
          onChangeText={(text) => setSecCode(text)}
        ></TextInput>
        <Text style={GlobalStyles.header}>Cardholder Name</Text>
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        ></TextInput>
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        ></TextInput>
        <Text style={GlobalStyles.header}>Billing Address</Text>
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
        ></TextInput>
        {/* <Text style={GlobalStyles.header}>City and State</Text> */}
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="City and State"
          value={cityState}
          onChangeText={(text) => setCityState(text)}
        ></TextInput>
        {/* <Text style={GlobalStyles.header}>Zip Code</Text> */}
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Zip Code"
          value={zipCode}
          onChangeText={(text) => setZipCode(text)}
        ></TextInput>
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Country"
          value={country}
          onChangeText={(text) => setCountry(text)}
        ></TextInput>
        {/* <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Phone Number"
        ></TextInput> */}
        <Button
          style={GlobalStyles.centeredButton}
          title="Purchase"
          color="#D22030"
          onPress={() => checkFormFilled()}
        ></Button>
        {!formFilled && (
          <Text style={GlobalStyles.invalid}>All Fields Must Be Completed</Text>
        )}
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
export default BillingScreen;
