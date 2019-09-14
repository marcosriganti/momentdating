import React from 'react';
import { View, Text, TouchableOpacity, Alert, Image, TextInput } from 'react-native';
import { Item, Form } from 'native-base';
import onBoardingStyles from '../../styles/onBoarding';
import * as Permissions from 'expo-permissions';

export default class Step12 extends React.Component {
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      try {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          Alert.alert('Sorry, we need Location permissions to make this work!');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text style={onBoardingStyles.title}>Discover realtime matches at any time and any location</Text>
          <Text style={onBoardingStyles.help}>It helps us to find potential matches near you</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Form>
            <Item>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, marginTop: 50 }}>
                  <Image source={require('../../assets/images/boarding/location.jpg')} style={{ width: '100%' }} />
                </View>
              </View>
            </Item>
            {/* <TouchableOpacity
              onPress={() => {
                setUserDocument(user);
                this.props.navigation.navigate('screen' + (step + 1), { step: step + 1 });
              }}
            ></TouchableOpacity> */}
          </Form>
        </View>
      </View>
    );
  }
}
