import React from 'react';
import { Image, StyleSheet, View, Animated, Text } from 'react-native';

const TIME = 4000;
class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0), // Initial value for opacity: 0
  };
  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.delay(this.props.index * TIME),
        Animated.timing(this.state.fadeAnim, {
          toValue: 1,
          duration: TIME,
        }),
        Animated.timing(this.state.fadeAnim, {
          toValue: 0,
          duration: TIME,
        }),
        Animated.delay((this.props.total - 1 - this.props.index) * TIME),
      ])
    ).start();
  }
  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: this.props.index == 0 ? 1 : fadeAnim,
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default function WelcomeLogo(props) {
  const images = [
    require('../assets/images/home/1.jpg'),
    require('../assets/images/home/2.jpg'),
    require('../assets/images/home/3.jpg'),
    require('../assets/images/home/4.jpg'),
  ];
  return (
    <View
      style={{
        flex: 2,
        position: 'relative',
        top: 0,
        width: '100%',
        paddingTop: 50,
      }}
    >
      {images.map((item, key) => (
        <FadeInView index={key} total={images.length} key={key}>
          <Image source={item} style={styles.welcomeLogo} />
        </FadeInView>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeLogo: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
