import React from "react";
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
  return (
    <ScrollView>
      <KeyboardAvoidingView style={GlobalStyles.Centeredcontainer}>
        {/* style={GlobalStyles.inputFields} */}
        <Text style={GlobalStyles.header}>Card Info</Text>
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Card Number"
        ></TextInput>
        {/* <Text style={GlobalStyles.header}>Expiration (MM/YYYY)</Text> */}
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Expiration Date (MM/YYYY)"
        ></TextInput>
        {/* <Text style={GlobalStyles.header}>Security Code</Text> */}
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Security Code"
        ></TextInput>
        <Text style={GlobalStyles.header}>Cardholder Name</Text>
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="First Name"
        ></TextInput>
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Last Name"
        ></TextInput>
        <Text style={GlobalStyles.header}>Billing Address</Text>
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Address"
        ></TextInput>
        {/* <Text style={GlobalStyles.header}>City and State</Text> */}
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="City and State"
        ></TextInput>
        {/* <Text style={GlobalStyles.header}>Zip Code</Text> */}
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Zip Code"
        ></TextInput>
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Country"
        ></TextInput>
        {/* <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Phone Number"
        ></TextInput> */}
        <Button
          style={GlobalStyles.centeredButton}
          title="Purchase"
          color="#D22030"
        ></Button>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default BillingScreen;
