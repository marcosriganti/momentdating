import React, { useContext } from 'react';
import { AsyncStorage, StyleSheet, View, Text, TouchableOpacity, Alert, Image, TextInput } from 'react-native';
import { Container, Content, Form, Item, Input, DatePicker, ListItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';
// import Icon from 'react-native-ionicons';

import { LinearGradient } from 'expo-linear-gradient';
//Steps
import Step0 from './onBoarding/Step0';
import Step1 from './onBoarding/Step1';
import Step2 from './onBoarding/Step2';
import Step3 from './onBoarding/Step3';
import Step4 from './onBoarding/Step4';
// Local
import Logo from '../components/Logo';
import Colors from '../constants/Colors';
import Common from '../styles/Common';
import onBoardingStyles from '../styles/onBoarding';

import { getUserDocument, setUserDocument } from '../firebase';

const questions = [
  {
    q: 'Which makes for a better relationship?',
    a: ['Passion', 'Dedication'],
  },
  {
    q: "What's your greatest motivation in life thus far?",
    a: ['Love', 'Wealth', 'Knowledge', 'Self Expression'],
  },
  {
    q: 'Which event sounds more appealing?',
    a: ['Coachella music and art festival', 'Camping in Yosemite'],
  },
  {
    q: 'Which best describes your perception of love?',
    a: [
      'Love is a committed campainonship',
      'Live is two individuals who learn to grow together',
      'Love is an adventure with another person',
    ],
  },
  {
    q: 'Which best describes your way to express love and care?',
    a: [
      'Compliment or appreciation through words or letters',
      'Give each other undivided attention and spend quality time together',
      'Give gifts and he/she likes',
      'Serve him/her and do things for him or her',
      'Physical touch: holding hands, kissing, embracing etc.',
    ],
  },
];
class OnBoarding extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
  };

  constructor(props) {
    super(props);
    this.state = {
      user: null,
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
    const { user, chosenDate } = this.state;
    // const { step } = this.props;
    const step = this.props.navigation.getParam('step', 6);

    if (!user) return null;

    return (
      <Container>
        <Content style={onBoardingStyles.container}>
          {/* Name */}
          {!step ? <Step0 keyUpdate={this.keyUpdate.bind(this)} user={user} /> : null}
          {/* Pictures  */}
          {step == 1 ? <Step1 keyUpdate={this.keyUpdate.bind(this)} user={user} /> : null}
          {/*  Profression */}
          {step == 2 ? <Step2 keyUpdate={this.keyUpdate.bind(this)} user={user} /> : null}
          {/* Bidthdate */}
          {step == 3 ? <Step3 keyUpdate={this.keyUpdate.bind(this)} user={user} /> : null}
          {/* Gender  */}
          {step == 4 ? (
            <Step4 keyUpdate={this.keyUpdate.bind(this)} keyToggle={this.keyToggle.bind(this)} user={user} />
          ) : null}
          {/* Location */}
          {step == 5 ? <Step3 user={user} /> : null}
          {/* quetsions init */}
          {step == 6 ? (
            <View style={{}}>
              <Text style={onBoardingStyles.title}>Answer 5 simple questions</Text>
              <Text style={onBoardingStyles.help}>
                This helps us discover your pattern in relationship and find the right match for you
              </Text>
              <LinearGradient
                colors={['#5CA7EB', '#53F3FD']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={[
                  Common.buttonWrapper,
                  {
                    width: 300,
                    height: 300,
                    top: 20,
                    left: -10,
                    borderRadius: 150,
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'space-around',
                  },
                ]}
              >
                <Ionicons name="question" size={100} color={`#fff`} style={{ textAlign: 'center', top: 80 }} />
              </LinearGradient>
            </View>
          ) : null}

          <View style={{ flex: 1, marginTop: 50 }}>
            <TouchableOpacity
              //  onPress={this._nextStep}
              onPress={() => this.props.navigation.navigate('screen' + (step + 1), { step: step + 1 })}
            >
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
            <Text>Step: {JSON.stringify(step)}</Text>
          </View>
        </Content>
      </Container>
    );
  }
  _nextStep = () => {
    const { step, user } = this.state;
    //Save User State
    setUserDocument(user);
    if (step == 4) {
      this.getPermissionAsync();
    }
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
