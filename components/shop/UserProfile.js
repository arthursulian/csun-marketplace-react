import React from "react";
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import GlobalStyles from "../GlobalStyles";
import ProductItem from "../shop/ProductItem";
import PRODUCTS from "../../data/dummy-data";
import USERS from "../../data/dummy-data";
import getProductByID, { getProductsByOwner } from "../HelperMethods";

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
    <View>
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

        <Text style={GlobalStyles.header}>Listings</Text>

        <FlatList
          horizontal={true}
          style={GlobalStyles.feedContainer}
          data={getProductsByOwner(props.user.id)}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => <ProductItem product={itemData.item} />}
        />
      </View>
    </View>
  );
}

export default UserProfile;
