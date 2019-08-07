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
        Animated.timing(
          // Animate over time
          this.state.fadeAnim, // The animated value to drive
          {
            toValue: 1, // Animate to opacity: 1 (opaque)
            duration: TIME, // Make it take a while
          }
        ),
        Animated.timing(
          // Animate over time
          this.state.fadeAnim, // The animated value to drive
          {
            toValue: 0, // Animate to opacity: 1 (opaque)
            duration: TIME, // Make it take a while
          }
        ),
        Animated.delay((this.props.total - 1 - this.props.index) * TIME),
        // Animated.delay(this.prop),
      ])
    ).start(); // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View // Special animatable View
        style={{
          ...this.props.style,
          // zIndex: this.props.index,
          opacity: this.props.index == 0 ? 1 : fadeAnim, // Bind opacity to animated value
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

      {/* <Image source={require('../assets/images/home/2.jpg')} style={styles.welcomeLogo} /> */}
      {/* <Image source={require('../assets/images/home/3.jpg')} style={styles.welcomeLogo} /> */}
      {/* <Image source={require('../assets/images/home/4.jpg')} style={styles.welcomeLogo} /> */}
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
