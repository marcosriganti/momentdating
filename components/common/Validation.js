import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Common from '../../styles/Common';

export const renderHelp = validation => {
  if (validation == null) return null;
  const { error, success, message } = validation;
  if (error) {
    return (
      <View>
        <Text style={Common.errorLabel}>{message}</Text>
      </View>
    );
  }
  return null;
};

export const renderIcon = validation => {
  if (validation == null) return null;
  console.log('>>renderIcon', validation);
  const { error, success } = validation;

  if (success == true) {
    return <Ionicons name="ios-checkmark-circle" size={22} color={`green`} />;
  }
  if (error === true) {
    console.log('error icon');
    return <Ionicons name="ios-close-circle" size={22} color={`red`} />;
  }
  return null;
};
