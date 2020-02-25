import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Logo(props) {
  return (
    <View style={props.style}>
      <Image
        source={require("../assets/images/logo_gif.png")}
        style={styles.navHeaderLogo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navHeaderLogo: {
    width: 113,
    height: 37,
    marginVertical: 10,
    paddingVertical: 10,
    resizeMode: "contain"
  }
});
