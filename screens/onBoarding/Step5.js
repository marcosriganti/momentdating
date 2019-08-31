import React, { useContext } from 'react';
import { AsyncStorage, StyleSheet, View, Text, TouchableOpacity, Alert, Image, TextInput } from 'react-native';
import { Container, Content, Form, Item, Input, DatePicker, ListItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import onBoardingStyles from '../../styles/onBoarding';
import { Ionicons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';

export default class Step5 extends React.Component {
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
      <View>
        <Text style={onBoardingStyles.title}>Discover realtime matches at any time and any location</Text>
        <Text style={onBoardingStyles.help}>It helps us to find potential matches near you</Text>
        <Form>
          <Item>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, marginTop: 50 }}>
                <Image source={require('../assets/images/boarding/location.jpg')} />
              </View>
            </View>
          </Item>
        </Form>
      </View>
    );
  }
}
