/*
    Side Menu Navigation Tray 
*/

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import React from "react";
import { View, StyleSheet } from "react-native";
import FeedScreen from "../screens/FeedScreen";
import RootScreen from "../screens/RootScreen";

const Drawer = createDrawerNavigator();

const DrawerNav = (props) => {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Root" component={RootScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
