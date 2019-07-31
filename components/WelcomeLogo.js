import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function WelcomeLogo(props) {
  return <Image source={require('../assets/images/welcome-logo.jpg')} style={styles.welcomeLogo} />;
}

const styles = StyleSheet.create({
  welcomeLogo: {
    width: '95%',
    marginLeft: '2.5%',
    height: undefined,
    aspectRatio: 1,
  },
});
