import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function WelcomeLogo(props) {
  return <Image source={require('../assets/images/welcome-logo.png')} style={styles.welcomeLogo} />;
}

const styles = StyleSheet.create({
  welcomeLogo: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});
