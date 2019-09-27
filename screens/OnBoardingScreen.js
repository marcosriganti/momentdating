import React from 'react';
import { AsyncStorage, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Container, ListItem, CheckBox, Body } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';
//Steps
import Step0 from './onBoarding/Step0';
import Step1 from './onBoarding/Step1';
import Step2 from './onBoarding/Step2';
import Step3 from './onBoarding/Step3';
import Step4 from './onBoarding/Step4';
import Step5 from './onBoarding/Step5';
import Step6 from './onBoarding/Step6';
import Step11 from './onBoarding/Step11';
import Step12 from './onBoarding/Step12';

// Local
import Logo from '../components/Logo';
import Colors from '../constants/Colors';
// import SubmitButton from '../components/common/Submit';

import Common from '../styles/Common';
import onBoardingStyles from '../styles/onBoarding';
import { questions } from './questions';
import { getUserDocument, setUserDocument, storage } from '../firebase';

export const SubmitButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={Colors.submitSet}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={Common.buttonWrapper}
      >
        <Text style={[Common.buttonText, { width: 100, height: 22, fontSize: 20, textAlign: 'center' }]}>Continue</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const validate = (value, rules) => {
  let key = null,
    error = false,
    message = '';
  if (rules.length > 0) {
    rules.map(rule => {
      key = Object.keys(rule)[0];
      switch (key) {
        case 'required':
          if (value.length === 0) {
            error = true;
            message = 'This field is required';
          }
          break;
        case 'array':
          if (value.length === 0) {
            error = true;
            message = 'At least one item is required';
          }
          break;
        case 'minLength':
          if (value.length < rule['minLength']) {
            message = 'This field is required';
            error = true;
          }
          break;
        case 'date':
          if (value.length === 0) {
            error = true;
            message = 'This field is required';
          }
          break;

        default:
          break;
      }
    });
  }

  return {
    error: error,
    success: !error,
    message: message,
  };
};
const validation = {
  displayName: [{ required: true }, { minLength: 1 }],
  profession: [{ required: true }, { minLength: 2 }],
  images: [{ array: 1 }],
  birthdate: [{ date: true }],
};
const step2Field = {
  0: ['displayName'],
  1: ['images'],
  2: ['profession'],
  3: ['birthdate'],
  // 3: ['birthdate'],
};
class OnBoarding extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
  };

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      validState: {},
      userId: 'le8dhoFiRXCKrLyMIfo3', //forcing to show myself
    };
  }

  componentDidMount = async () => {
    //Get  current user
    const user = await getUserDocument(this.state.userId);
    this.setState({ user, chosenDate: user.birthdate ? new Date(user.birthdate.seconds * 1000) : new Date() });
  };
  uploadImageAsync = async (uri, uid) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });

    const ref = storage
      .ref()
      .child('user-profiles')
      .child(uid)
      .child(uri.split(/[\\/]/).pop());
    const snapshot = await ref.put(blob);
    blob.close();
    return await snapshot.ref.getDownloadURL();
  };

  handleSubmit = step => {
    let rules;
    const fields = step2Field[step];
    let newValidState = this.state.validState;
    let success = true;
    if (fields.length > 0) {
      fields.map(item => {
        rules = validation[item];
        if (rules !== undefined) {
          newValidState[item] = validate(this.state.user[item], rules);
          if (newValidState[item].error) success = false;
        }
      });
    }

    this.setState({ validState: newValidState });
    if (success) this._nextStep(step);
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
  _nextStep = async step => {
    const { user } = this.state;
    setUserDocument(user);
    if (step == 12) {
      //Set OnBoarding Done
      await AsyncStorage.setItem('onBoarding', 'wow');
      this.props.navigation.navigate('Home');
    } else {
      this.props.navigation.navigate('screen' + (step + 1), { step: step + 1 });
    }
  };
  render() {
    const { user, validState } = this.state;
    const step = this.props.navigation.getParam('step', 0);
    let questionIndex = null;
    if (step >= 6 && step < 11) questionIndex = parseInt(step) - 6;

    if (!user) return null;
    const skippable = step >= 5 && step < 11;

    return (
      <Container>
        <View style={onBoardingStyles.container}>
          <View style={{ flex: 3 }}>
            {/* Name */}
            {!step ? <Step0 keyUpdate={this.keyUpdate.bind(this)} user={user} validation={validState} /> : null}
            {/* Pictures  */}
            {step == 1 ? (
              <Step1
                keyUpdate={this.keyUpdate.bind(this)}
                user={user}
                uploadImageAsync={this.uploadImageAsync.bind(this)}
              />
            ) : null}
            {/*  Profression */}
            {step == 2 ? <Step2 keyUpdate={this.keyUpdate.bind(this)} user={user} validation={validState} /> : null}
            {/* Bidthdate */}
            {step == 3 ? <Step3 keyUpdate={this.keyUpdate.bind(this)} user={user} validation={validState} /> : null}
            {/* Gender  */}
            {step == 4 ? (
              <Step4
                keyUpdate={this.keyUpdate.bind(this)}
                keyToggle={this.keyToggle.bind(this)}
                user={user}
                validation={validState}
              />
            ) : null}
            {/* Location */}

            {/* quetsions init */}
            {step == 5 ? <Step5 /> : null}

            {skippable && step >= 6 && questionIndex >= 0 ? <Step6 questionIndex={questionIndex} /> : null}

            {step == 11 ? <Step11 user={user} /> : null}

            {step == 12 ? <Step12 user={user} /> : null}
          </View>
          {/* Boarding Footer  */}
          <SubmitButton onPress={() => this.handleSubmit(step)} />
          <View style={{ flex: 1, marginTop: 50 }}>
            {skippable ? (
              <View style={{ textAlign: 'center' }}>
                <Text
                  style={[onBoardingStyles.help, { paddingVertical: 10 }]}
                  onPress={() => {
                    this.props.navigation.navigate('screen' + (step + 1), { step: step + 1 });
                  }}
                >
                  Skip
                </Text>
              </View>
            ) : null}
          </View>
        </View>
      </Container>
    );
  }

  _showMoreApp = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Home');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
export default OnBoarding;
