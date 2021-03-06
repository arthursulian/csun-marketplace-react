import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import { IMGS } from "../data/dummy-data";

export default function UploadImage() {
  const [image, setImage] = useState(null);
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    IMGS.push(_image.uri);
    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };

  return (
    <View style={imageUploaderStyles.imgcontainer}>
      {image && (
        <Image source={{ uri: image }} style={{ width: 256, height: 256 }} />
      )}

      <View style={imageUploaderStyles.uploadBtnContainer}>
        <TouchableOpacity
          onPress={addImage}
          style={imageUploaderStyles.uploadBtn}
        >
          <Text style={{ fontSize: 20 }}>
            {image ? "Edit" : "Upload"} Image
          </Text>
          <AntDesign name="camera" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const imageUploaderStyles = StyleSheet.create({
  imgcontainer: {
    elevation: 2,
    height: 256,
    width: 256,
    backgroundColor: "#efefef",
    position: "relative",
    alignSelf: "center",
    overflow: "hidden",
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "lightgrey",
    width: "100%",
    height: "25%",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
// let imageURL = _image.uri;
//export default imageURL;
