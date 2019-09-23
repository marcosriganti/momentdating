import React from 'react';
import { AsyncStorage, View, Text, TouchableOpacity } from 'react-native';
import { Container, ListItem, CheckBox, Body, Form, Item, Input } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
// Local
import Logo from '../components/Logo';
import Colors from '../constants/Colors';
import Common from '../styles/Common';
import onBoardingStyles from '../styles/onBoarding';

class PhoneScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
  };

  constructor(props) {
    super(props);
    this.state = {
      phone: null,
      sent: false,
    };
  }

  componentDidMount = async () => {
    //Get  current user
  };
  _checkCode = () => {
    this.props.navigation.navigate('screen0');
  };
  _verifyCode = () => {
    // this.setState({ sent: true });
    const { phone } = this.state;
    this.props.navigation.navigate('VerifyPhone', { sent: true, phone: phone });
  };
  render() {
    const { phone } = this.state;
    const sent = this.props.navigation.getParam('sent', false);
    const sentPhoneNumber = this.props.navigation.getParam('phone', null);
    return (
      <Container>
        <View style={onBoardingStyles.container}>
          {sent ? (
            <View style={{ flex: 1 }}>
              <View style={{ flex: 3 }}>
                <View>
                  <Text style={onBoardingStyles.title}>Enter Your Code</Text>

                  <Form>
                    <Item floatingLabel>
                      <Input
                        value={phone}
                        placeholder=" 6 digit verification code "
                        onChangeText={text => this.setState({ phone: text })}
                        keyboardType={'phone-pad'}
                        style={{ width: 20 }}
                      />
                    </Item>
                  </Form>
                  <Text style={[onBoardingStyles.help, { marginVertical: 15 }]}>
                    A code sent to {sentPhoneNumber}. You can send another code within 1 minute.
                  </Text>
                </View>
              </View>
              {/* Boarding Footer  */}
              <View style={{ flex: 1, marginTop: 50 }}>
                <TouchableOpacity onPress={() => this._checkCode()}>
                  <LinearGradient
                    colors={Colors.submitSet}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={Common.buttonWrapper}
                  >
                    <Text style={[Common.buttonText, { height: 22, fontSize: 20, textAlign: 'center' }]}>Verify</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={{ flex: 1 }}>
              <View style={{ flex: 3 }}>
                <View>
                  <Text style={onBoardingStyles.title}>What’s Your Number?</Text>
                  <Text style={onBoardingStyles.help}>Your number will be used to create your account</Text>
                  <Form>
                    <Item floatingLabel>
                      <Input
                        value={phone}
                        placeholder="US Phone number"
                        onChangeText={text => this.setState({ phone: text })}
                        keyboardType={'phone-pad'}
                      />
                    </Item>
                  </Form>
                </View>
              </View>
              <View style={{ flex: 1, marginTop: 50 }}>
                <TouchableOpacity onPress={() => this._verifyCode()}>
                  <LinearGradient
                    colors={Colors.submitSet}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={Common.buttonWrapper}
                  >
                    <Text style={[Common.buttonText, { height: 22, fontSize: 20, textAlign: 'center' }]}>
                      Send Verification Code
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          )}
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
export default PhoneScreen;
