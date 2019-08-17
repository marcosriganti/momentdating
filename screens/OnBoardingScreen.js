import React, { useContext } from 'react';
import { AsyncStorage, StyleSheet, View, Text, TouchableOpacity, Alert, Image, TextInput } from 'react-native';
import { Container, Content, Form, Item, Input, DatePicker, ListItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';

// import Icon from 'react-native-ionicons';

import { LinearGradient } from 'expo-linear-gradient';
//Steps
import Step0 from './onBoarding/Step0';
import Step1 from './onBoarding/Step1';
import Step2 from './onBoarding/Step2';
// Local
import Logo from '../components/Logo';
import Colors from '../constants/Colors';
import Common from '../styles/Common';
import onBoardingStyles from '../styles/onBoarding';

import { getUserDocument, setUserDocument } from '../firebase';

class OnBoarding extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
  };

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      step: 0,
      userId: 'le8dhoFiRXCKrLyMIfo3', //forcing to show myself
    };
  }

  componentDidMount = async () => {
    //Get  current user
    const user = await getUserDocument(this.state.userId);
    this.setState({ user, chosenDate: user.birthdate ? new Date(user.birthdate.seconds * 1000) : new Date() });
  };
  keyUpdate = (key, val) => {
    let newState = this.state.user;
    newState[key] = val;
    this.setState({ user: newState });
  };
  keyToggle = key => {
    let newState = this.state.user;
    newState[key] = !this.state.user[key] ? true : false;
    this.setState({ user: newState });
  };

  render() {
    const { step, user, chosenDate } = this.state;

    if (!user) return null;

    return (
      <Container>
        <Content style={onBoardingStyles.container}>
          {step == 0 ? <Step0 keyUpdate={this.keyUpdate.bind(this)} user={user} /> : null}

          {step == 1 ? <Step1 keyUpdate={this.keyUpdate.bind(this)} user={user} /> : null}

          {step == 2 ? <Step2 keyUpdate={this.keyUpdate.bind(this)} user={user} /> : null}

          {step == 3 ? (
            <View>
              <Text style={onBoardingStyles.title}>When is your birthday?</Text>
              <Text style={onBoardingStyles.help}>Be shared with the right audience.</Text>
              <Form>
                <Item>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, marginTop: 20 }}>
                      <DatePicker
                        defaultDate={chosenDate}
                        minimumDate={new Date(1920, 1, 1)}
                        maximumDate={new Date(Date.now() - 60 * 60 * 24 * 365 * 18)}
                        locale={'en'}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={'fade'}
                        androidMode={'default'}
                        placeHolderText="Select date"
                        textStyle={{ color: 'green' }}
                        style={{ width: '100%', textAlign: 'center' }}
                        placeHolderTextStyle={{ color: '#d3d3d3' }}
                        onDateChange={date => {
                          this.keyUpdate('birthdate', date);
                        }}
                        mode={'dropdown'}
                        disabled={false}
                      />
                    </View>
                  </View>
                </Item>
              </Form>
            </View>
          ) : null}

          {step == 4 ? (
            <View>
              <Text style={onBoardingStyles.title}>I identify as a... </Text>
              <Grid style={{ marginVertical: 30, paddingHorizontal: 30 }}>
                <Col>
                  <View
                    style={[
                      onBoardingStyles.iconWrapper,
                      { backgroundColor: user.gender == 1 ? `#A4F4F6` : `#D8D8D8` },
                    ]}
                  >
                    <Ionicons
                      onPress={() => this.keyUpdate('gender', 1)}
                      name="md-male"
                      size={48}
                      color={user.gender == 1 ? `#ffffff` : `#969696`}
                      style={{ textAlign: 'center' }}
                    />
                    <Text style={[onBoardingStyles.iconLabel, { color: user.gender == 1 ? `#ffffff` : `#969696` }]}>
                      Man
                    </Text>
                  </View>
                </Col>
                <Col>
                  <View
                    style={[
                      onBoardingStyles.iconWrapper,
                      { backgroundColor: user.gender == 2 ? `#A4F4F6` : `#D8D8D8` },
                    ]}
                  >
                    <Ionicons
                      onPress={() => this.keyUpdate('gender', 2)}
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
                  <TouchableOpacity onPress={() => this.keyToggle('inMan')}>
                    <View
                      style={[onBoardingStyles.iconWrapper, { backgroundColor: user.inMan ? `#A4F4F6` : `#D8D8D8` }]}
                    >
                      <Ionicons
                        name="md-male"
                        size={48}
                        color={user.inMan ? `#ffffff` : `#969696`}
                        style={{ textAlign: 'center' }}
                      />
                      <Text style={[onBoardingStyles.iconLabel, { color: user.inMan ? `#ffffff` : `#969696` }]}>
                        Man
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity onPress={() => this.keyToggle('inWoman')}>
                    <View
                      style={[onBoardingStyles.iconWrapper, { backgroundColor: user.inWoman ? `#A4F4F6` : `#D8D8D8` }]}
                    >
                      <Ionicons
                        name="md-female"
                        size={48}
                        color={user.inWoman ? `#ffffff` : `#969696`}
                        style={{ textAlign: 'center' }}
                      />
                      <Text style={[onBoardingStyles.iconLabel, { color: user.inWoman ? `#ffffff` : `#969696` }]}>
                        Woman
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Col>
              </Grid>
            </View>
          ) : null}

          {step == 5 ? (
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
    const { step, user } = this.state;
    //Save User State
    setUserDocument(user);
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
