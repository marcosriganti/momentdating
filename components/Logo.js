import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Logo(props) {
  return <Image source={require('../assets/images/logo.png')} style={styles.navHeaderLogo} />;
}

const styles = StyleSheet.create({
  navHeaderLogo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
});
