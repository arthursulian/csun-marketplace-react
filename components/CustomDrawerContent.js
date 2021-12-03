import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { getUserByID } from "./HelperMethods";

// don't touch this code it doesn't work
/*
const CustomDrawerContentNonFunctional = (props) => {
  // the body of this code is copy-pasted from https://stackoverflow.com/questions/62204060/how-to-hide-drawer-item-in-react-navigation-5x
  // essentially this function provides the navigation drawer with a filtered list of navigation buttons.
  // ...in theory.
  const { state, ...rest } = props;
  const newState = { ...state };
  newState.routes = newState.routes.filter(DrawerContentFilter);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  );
};

const DrawerContentFilter = (item) => {
  const showButtons = ["Feed", "Root"];
  return showButtons.includes(item.name); // this function is supposed to filter the buttons, but for some reason hiding that button nukes the associated screen
}; 
*/

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Feed"
        onPress={() => props.navigation.navigate("Feed")}
      />
      <DrawerItem
        label="My Profile"
        onPress={
          () =>
            props.navigation.navigate("Profile", { user: getUserByID("u1") }) // TODO: replace this with the currently logged in user
        }
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
