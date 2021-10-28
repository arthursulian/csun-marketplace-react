// hi
import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

function FeedScreen({ navigation }) {
  return (
    <ScrollView style={styles.mainFeed}>
      <Text style={styles.textStyle}>
        hello fgdgfgfhfdfffffffffffffffffffffffffffffffffffffffffffejllo
      </Text>
      <Text style={styles.textStyles}>
        hello fgdgfgfhfdfffffffffffffffffffffffffffffffffffffffffffejllo
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainFeed: {
    margin: 40,
  },
  textStyle: {
    fontSize: 45,
  },

  textStyles: {
    fontSize: 100,
  },
});

export default FeedScreen;
