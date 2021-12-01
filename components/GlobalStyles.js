import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  // for scrolling feeds with drop shadows on the items
  feedContainer: {
    padding: 0,
  },

  // for detailed single pages like for products and users
  pageContainer: {
    padding: 16,
  },

  // for heading off a single section
  header: {
    color: "grey",
    marginTop: 16,
    marginBottom: 4,
    fontSize: 24,
  },

  // for the name of the thing that a page is about
  title: {
    alignSelf: "center",
    justifyContent: "center",
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },

  // legacy fallback until we think of something more modern (probably using the flex attribute)
  centeredImage: {
    alignSelf: "center",
    width: 256,
    height: 256,
    margin: 32,
  },

  // legacy button, same deal as centeredImage
  centeredButton: {
    marginTop: 16,
    width: 256,
    alignSelf: "center",
  },

  // makes text bold without having to generate another stylesheet
  bold: {
    fontWeight: "bold",
  },
});

export default GlobalStyles;