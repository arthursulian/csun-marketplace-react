//General React/Expo Import Statements
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Screen Import Statements
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FeedScreen from "./screens/FeedScreen";

//Navigation Imports
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Redux, Reducers, Actions
import { createStore, combineReducers, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/products";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";


// Redux const needed
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

// Stack navigator needed for moving between screens
const Stack = createStackNavigator();

function App() {
  return (
    // JSX Element needed as root element for Redux
    <Provider store={store}>
      {/*Nav Element needed */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Feed" component={FeedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
