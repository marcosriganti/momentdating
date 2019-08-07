import React from 'react';
import { AsyncStorage, StyleSheet, View, Text, Alert } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  DatePicker,
  Radio,
  Right,
  Left,
  ListItem,
  CheckBox,
  Body,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-ionicons';

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
});
class OnBoarding extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
  };

  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date(), step: 0 };
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
              <Text style={onBoardingStyles.help}>What you do is partt of your identity.</Text>

              <Grid>
                <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
                  <ListItem>
                    <Icon ios="ios-add" android="md-add" />
                  </ListItem>
                </Col>
                <Col style={{ backgroundColor: '#00CE9F', height: 200 }} />
              </Grid>

              <Text style={onBoardingStyles.title}>Interested in meeting a... </Text>
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
            <LinearGradient
              colors={Colors.submitSet}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={Common.buttonWrapper}
            >
              <Text
                onPress={this._nextStep}
                style={[Common.buttonText, { width: 100, height: 22, fontSize: 20, textAlign: 'center' }]}
              >
                Continue
              </Text>
            </LinearGradient>

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
