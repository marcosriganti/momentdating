import React, { useContext } from 'react';
import { AsyncStorage, StyleSheet, View, Text, TouchableOpacity, Alert, Image, TextInput } from 'react-native';
import { Container, Content, Form, Item, Input, DatePicker, ListItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import onBoardingStyles from '../../styles/onBoarding';
import { Ionicons } from '@expo/vector-icons';

export default class Step4 extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <View style={{ flex: 1 }}>
        <Text style={onBoardingStyles.title}>I identify as a... </Text>
        <Grid style={{ marginVertical: 30, paddingHorizontal: 30 }}>
          <Col>
            <View style={[onBoardingStyles.iconWrapper, { backgroundColor: user.gender == 1 ? `#A4F4F6` : `#D8D8D8` }]}>
              <Ionicons
                onPress={() => this.props.keyUpdate('gender', 1)}
                name="md-male"
                size={48}
                color={user.gender == 1 ? `#ffffff` : `#969696`}
                style={{ textAlign: 'center' }}
              />
              <Text style={[onBoardingStyles.iconLabel, { color: user.gender == 1 ? `#ffffff` : `#969696` }]}>Man</Text>
            </View>
          </Col>
          <Col>
            <View style={[onBoardingStyles.iconWrapper, { backgroundColor: user.gender == 2 ? `#A4F4F6` : `#D8D8D8` }]}>
              <Ionicons
                onPress={() => this.props.keyUpdate('gender', 2)}
                name="md-female"
                size={48}
                color={user.gender == 2 ? `#ffffff` : `#969696`}
                style={{ textAlign: 'center' }}
              />
              <Text style={[onBoardingStyles.iconLabel, { color: user.gender == 2 ? `#ffffff` : `#969696` }]}>
                Woman
              </Text>
            </View>
          </Col>
        </Grid>

        <Text style={onBoardingStyles.title}>Interested in meeting a... </Text>

        <Grid style={{ marginVertical: 30, paddingHorizontal: 30 }}>
          <Col>
            <TouchableOpacity onPress={() => this.props.keyToggle('inMan')}>
              <View style={[onBoardingStyles.iconWrapper, { backgroundColor: user.inMan ? `#A4F4F6` : `#D8D8D8` }]}>
                <Ionicons
                  name="md-male"
                  size={48}
                  color={user.inMan ? `#ffffff` : `#969696`}
                  style={{ textAlign: 'center' }}
                />
                <Text style={[onBoardingStyles.iconLabel, { color: user.inMan ? `#ffffff` : `#969696` }]}>Man</Text>
              </View>
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity onPress={() => this.props.keyToggle('inWoman')}>
              <View style={[onBoardingStyles.iconWrapper, { backgroundColor: user.inWoman ? `#A4F4F6` : `#D8D8D8` }]}>
                <Ionicons
                  name="md-female"
                  size={48}
                  color={user.inWoman ? `#ffffff` : `#969696`}
                  style={{ textAlign: 'center' }}
                />
                <Text style={[onBoardingStyles.iconLabel, { color: user.inWoman ? `#ffffff` : `#969696` }]}>Woman</Text>
              </View>
            </TouchableOpacity>
          </Col>
        </Grid>
      </View>
    );
  }
}
