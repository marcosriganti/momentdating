import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import onBoardingStyles from '../../styles/onBoarding';
import Colors from '../../constants/Colors';
import Common from '../../styles/Common';
export default class Step12 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <LinearGradient
            colors={Colors.submitSet}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={[Common.buttonWrapper, { padding: 30 }]}
          >
            <Text style={[onBoardingStyles.title, { color: '#fff' }]}>Congratulations! You finished onboarding!</Text>
          </LinearGradient>
          {/* Home Landing Button */}
        </View>
      </View>
    );
  }
}
