import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../GlobalStyles";
import ProductItem from "../shop/ProductItem";
import PRODUCTS from "../../data/dummy-data";
import USERS from "../../data/dummy-data";
import getProductByID from "../HelperMethods";

const ProfileBio = (props) => {
  return (
    <View>
      <Text>{props.content}</Text>
    </View>
  );
};

const ProfileDetail = (props) => {
  // TODO: get rid of this and inline the details instead so we have greater control over the formatting
  return (
    <View>
      <Text>
        {props.category}: <Text style={GlobalStyles.bold}>{props.value}</Text>
      </Text>
    </View>
  );
};

function UserProfile(props) {
  return (
    <ScrollView>
      <View style={GlobalStyles.pageContainer}>
        <Image
          style={GlobalStyles.centeredImage}
          source={{
            uri: props.user.imageUrl,
          }}
        />
        <Text style={GlobalStyles.title}>{props.user.name}</Text>

        <Text style={GlobalStyles.header}>Details</Text>
        <ProfileDetail category="Join Date" value={props.user.joinDate} />
        <ProfileDetail category="Rating" value={props.user.rating} />
        <ProfileDetail category="Major" value={props.user.major} />
        <ProfileDetail category="Gender" value={props.user.gender} />

        <Text style={GlobalStyles.header}>Bio</Text>
        <ProfileBio content={props.user.bio} />

        <Text style={GlobalStyles.header}>Most Recent Listing</Text>
        <ProductItem product={getProductByID("p1")} />
      </View>
    </ScrollView>
  );
}

export default UserProfile;
