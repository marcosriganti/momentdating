import React from 'react';
import { AsyncStorage, StyleSheet, View, Text } from 'react-native';
import { Container, Content, Form, Item, Input, DatePicker } from 'native-base';

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
              <Text style={onBoardingStyles.help}>What you do is partt of your identity.</Text>
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
                <Item floatingLabel>
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
                    placeHolderTextStyle={{ color: '#d3d3d3' }}
                    onDateChange={this.setDate}
                    disabled={false}
                  />
                  <Input
                    placeholder="I'm an engineer, artist, student, venture capitalist"
                    value={this.state.chosenDate.toString().substr(4, 12)}
                  />
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
