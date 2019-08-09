import React from 'react';
import { AsyncStorage, StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Container, Content, Form, Item, Input, DatePicker, ListItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';

// import Icon from 'react-native-ionicons';

import { LinearGradient } from 'expo-linear-gradient';
// Local
import Logo from '../components/Logo';
import Colors from '../constants/Colors';
import Common from '../styles/Common';
const onBoardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 40,
    alignContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.darkColor,
    textAlign: 'center',
    marginBottom: 10,
  },
  help: {
    color: Colors.darkColor,
    textAlign: 'center',
    fontSize: 14,
  },
  iconWrapper: {
    backgroundColor: '#D8D8D8',
    padding: 30,
    borderRadius: 90,
    width: 120,
    height: 120,
  },
  iconLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#969696',
  },
});
class OnBoarding extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
  };

  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date(), step: 0, gender: null, inter: [] };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    const { step } = this.state;
    return (
      <Container>
        <Content style={onBoardingStyles.container}>
          {step == 0 ? (
            <View>
              <Text style={onBoardingStyles.title}>What's Your Preferred Name?</Text>
              <Text style={onBoardingStyles.help}>
                Your name will be revelead only to the people when you get matched with.
              </Text>
              <Form>
                <Item floatingLabel>
                  {/* <Label>Name</Label> */}
                  <Input placeholder="Preferred Name" />
                </Item>
              </Form>
            </View>
          ) : null}

          {step == 1 ? (
            <View>
              <Text style={onBoardingStyles.title}>What's Your Profession?</Text>
              <Text style={onBoardingStyles.help}>What you do is part of your identity.</Text>
              <Form>
                <Item floatingLabel>
                  <Input placeholder="I'm an engineer, artist, student, venture capitalist" />
                </Item>
              </Form>
            </View>
          ) : null}

          {step == 2 ? (
            <View>
              <Text style={onBoardingStyles.title}>When is your birthday?</Text>
              <Text style={onBoardingStyles.help}>Be shared with the right audience.</Text>
              <Form>
                <Item>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, marginTop: 20 }}>
                      <DatePicker
                        defaultDate={new Date(2018, 4, 4)}
                        minimumDate={new Date(2018, 1, 1)}
                        maximumDate={new Date(2018, 12, 31)}
                        locale={'en'}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={'fade'}
                        androidMode={'default'}
                        placeHolderText="Select date"
                        textStyle={{ color: 'green' }}
                        style={{ width: '100%', textAlign: 'center' }}
                        placeHolderTextStyle={{ color: '#d3d3d3' }}
                        onDateChange={this.setDate}
                        disabled={false}
                      />
                    </View>
                  </View>
                </Item>
              </Form>
            </View>
          ) : null}

          {step == 3 ? (
            <View>
              <Text style={onBoardingStyles.title}>I identify as a... </Text>
              <Grid style={{ marginVertical: 30, paddingHorizontal: 30 }}>
                <Col>
                  <View
                    style={[
                      onBoardingStyles.iconWrapper,
                      { backgroundColor: this.state.gender == 1 ? `#A4F4F6` : `#D8D8D8` },
                    ]}
                  >
                    <Ionicons
                      onPress={() => this.setState({ gender: 1 })}
                      name="md-male"
                      size={48}
                      color={this.state.gender == 1 ? `#ffffff` : `#969696`}
                      style={{ textAlign: 'center' }}
                    />
                    <Text
                      style={[onBoardingStyles.iconLabel, { color: this.state.gender == 1 ? `#ffffff` : `#969696` }]}
                    >
                      Man
                    </Text>
                  </View>
                </Col>
                <Col>
                  <View
                    style={[
                      onBoardingStyles.iconWrapper,
                      { backgroundColor: this.state.gender == 2 ? `#A4F4F6` : `#D8D8D8` },
                    ]}
                  >
                    <Ionicons
                      onPress={() => this.setState({ gender: 2 })}
                      name="md-female"
                      size={48}
                      color={this.state.gender == 2 ? `#ffffff` : `#969696`}
                      style={{ textAlign: 'center' }}
                    />
                    <Text
                      style={[onBoardingStyles.iconLabel, { color: this.state.gender == 2 ? `#ffffff` : `#969696` }]}
                    >
                      Woman
                    </Text>
                  </View>
                </Col>
              </Grid>

              <Text style={onBoardingStyles.title}>Interested in meeting a... </Text>

              <Grid style={{ marginVertical: 30, paddingHorizontal: 30 }}>
                <Col>
                  <View style={onBoardingStyles.iconWrapper} onPress={() => this.setState({ inter: 1 })}>
                    <Ionicons name="md-male" size={48} color="#969696" style={{ textAlign: 'center' }} />
                    <Text style={onBoardingStyles.iconLabel}>Man</Text>
                  </View>
                </Col>
                <Col>
                  <View style={onBoardingStyles.iconWrapper} onPress={() => this.setState({ inter: 2 })}>
                    <Ionicons name="md-female" size={48} color="#969696" style={{ textAlign: 'center' }} />
                    <Text style={onBoardingStyles.iconLabel}>Woman</Text>
                  </View>
                </Col>
              </Grid>
            </View>
          ) : null}

          {step == 4 ? (
            <View>
              <Text style={onBoardingStyles.title}>Discover realtime matches at any time and any location</Text>
              <Text style={onBoardingStyles.help}>It helps us to find potential matches near you</Text>
              <Form>
                <Item>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, marginTop: 20 }}>
                      <DatePicker
                        defaultDate={new Date(2018, 4, 4)}
                        minimumDate={new Date(2018, 1, 1)}
                        maximumDate={new Date(2018, 12, 31)}
                        locale={'en'}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={'fade'}
                        androidMode={'default'}
                        placeHolderText="Select date"
                        textStyle={{ color: 'green' }}
                        style={{ width: '100%', textAlign: 'center' }}
                        placeHolderTextStyle={{ color: '#d3d3d3' }}
                        onDateChange={this.setDate}
                        disabled={false}
                      />
                    </View>
                  </View>
                </Item>
              </Form>
            </View>
          ) : null}

          <View style={{ flex: 1, marginTop: 50 }}>
            <TouchableOpacity onPress={this._nextStep}>
              <LinearGradient
                colors={Colors.submitSet}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={Common.buttonWrapper}
              >
                <Text style={[Common.buttonText, { width: 100, height: 22, fontSize: 20, textAlign: 'center' }]}>
                  Continue
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <Text onPress={this._signOutAsync}> Exit </Text>
          </View>
        </Content>
      </Container>
    );
  }
  _nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  _showMoreApp = async () => {
    await AsyncStorage.setItem('onBoarding', 'wow');
    this.props.navigation.navigate('Home');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
export default OnBoarding;
