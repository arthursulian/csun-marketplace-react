//General React/Expo Import Statements
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Screen Import Statements
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FeedScreen from "./screens/FeedScreen";
import ProductScreen from "./screens/ProductScreen";
import NewListingScreen from "./screens/NewListingScreen";
import BillingScreen from "./screens/BillingScreen";
import RootScreen from "./screens/RootScreen";

//Navigation Imports
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import CustomDrawerContent from "./components/CustomDrawerContent";

// Redux Stuff
import { Provider } from "react-redux";
import { Store } from "./redux/store/store";
import { getUserByID } from "./components/HelperMethods";

// Stack navigator needed for moving between screens
const Stack = createStackNavigator();

// Drawer navigator needed for using the side menu
const Drawer = createDrawerNavigator();

// TODO: transfer the whole navigation hierarchy into a file in the navigation folder

const UserContext = React.createContext(null);

const DrawerNav = ({ route }, props) => {
  return (
    <UserContext.Provider value={getUserByID(route.params.currentUser)}>
      <Drawer.Navigator
        initialRouteName="Feed"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Root" component={RootScreen} />

        {/* TODO: Consider making the below two screens here part of a stack navigator inside the drawer navigator. */}
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ hidden: true }}
        />
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={{ hidden: true }}
        />
      </Drawer.Navigator>
    </UserContext.Provider>
  );
};
// temporarily moving this here
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Feed"
        onPress={() => props.navigation.navigate("Feed")}
      />
      <UserContext.Consumer>
        {(value) => (
          <DrawerItem
            label="My Profile"
            onPress={
              () => props.navigation.navigate("Profile", { user: value }) // TODO: replace this with the currently logged in user
            }
          />
        )}
      </UserContext.Consumer>
    </DrawerContentScrollView>
  );
};

function App() {
  return (
    // JSX Element needed as root element for Redux
    <Provider store={Store}>
      {/*Nav Element needed */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen
            name="Home"
            component={DrawerNav}
            options={{
              headerRight: (props) => <HeaderRight {...props} />,
            }}
          />
          <Stack.Screen name="NewListing" component={NewListingScreen} />
          <Stack.Screen name="Billing" component={BillingScreen} />
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
export { Stack };
