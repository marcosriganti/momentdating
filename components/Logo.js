import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Logo(props) {
  return (
    <Image
      source={require("../assets/images/logo_gif.png")}
      style={styles.navHeaderLogo}
    />
  );
}

const styles = StyleSheet.create({
  navHeaderLogo: {
    width: 113,
    height: 37,
    marginVertical: 10,
    paddingVertical: 10,
    resizeMode: "contain",
    borderColor: "red",
    borderWidth: 1
  }
});
