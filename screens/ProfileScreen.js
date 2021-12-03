import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import UserProfile from "../components/shop/UserProfile";
import GlobalStyles from "../components/GlobalStyles";

// this is basically just a shell, for the actual guts behind it go to ../components/shop/UserProfile.js

function ProfileScreen({ navigation, route }) {
  return (
    <ScrollView>
      <UserProfile user={route.params.user} />
    </ScrollView>
  );
}

export default ProfileScreen;
