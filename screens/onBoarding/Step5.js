import React, { useContext } from 'react';
import { AsyncStorage, StyleSheet, View, Text, TouchableOpacity, Alert, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import onBoardingStyles from '../../styles/onBoarding';
import { Ionicons } from '@expo/vector-icons';

export default class Step5 extends React.Component {
  render() {
    return (
      <View style={{}}>
        <Text style={onBoardingStyles.title}>Answer 5 simple questions</Text>
        <Text style={onBoardingStyles.help}>
          This helps us discover your pattern in relationship and find the right match for you
        </Text>
        <LinearGradient
          colors={['#5CA7EB', '#53F3FD']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={[
            Common.buttonWrapper,
            {
              width: 300,
              height: 300,
              top: 20,
              left: -10,
              borderRadius: 150,
              display: 'flex',
              alignItems: 'center',
              alignContent: 'space-around',
            },
          ]}
        >
          <Ionicons name="question" size={100} color={`#fff`} style={{ textAlign: 'center', top: 80 }} />
        </LinearGradient>
      </View>
    );
  }
}
