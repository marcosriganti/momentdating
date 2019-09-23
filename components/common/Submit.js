import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity } from 'react-native';
import Common from '../../styles/Common';
import Colors from '../../constants/Colors';

export const SubmitButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={Colors.submitSet}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={Common.buttonWrapper}
      >
        <Text style={[Common.buttonText, { width: 100, height: 22, fontSize: 20, textAlign: 'center' }]}>Continue</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
