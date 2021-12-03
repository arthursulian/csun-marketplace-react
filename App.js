//General React/Expo Import Statements
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Screen Import Statements
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FeedScreen from "./screens/FeedScreen";
import ProductScreen from "./screens/ProductScreen";

//Navigation Imports
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// Redux Stuff
import { Provider } from "react-redux";
import { Store } from "./redux/store/store";
import HeaderRight from "./components/HeaderRight";
import DrawerNav from "./components/DrawerNav";

// Stack navigator needed for moving between screens
const Stack = createStackNavigator();

// Drawer navigator needed for using the side menu
// const Drawer = createDrawerNavigator();

function App() {
  return (
    // JSX Element needed as root element for Redux
    <Provider store={Store}>
      {/*Nav Element needed */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen
            name="Feed"
            component={FeedScreen}
            options={{
              headerRight: (props) => <HeaderRight {...props} />,
            }}
          />
          <Stack.Screen name="DrawerTest" component={DrawerNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
