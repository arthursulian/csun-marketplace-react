import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ListingForm from "../components/forms/ListingForm";

// this is basically just a shell, for the actual guts behind it go to ../components/shop/UserProfile.js

function NewListingScreen({ navigation, route }) {
  return (
    <ScrollView>
      <ListingForm user={route.params.user} />
    </ScrollView>
  );
}

export default NewListingScreen;
