import React from 'react';
import { View, Text } from 'react-native';
import { Form, Item, DatePicker } from 'native-base';
import onBoardingStyles from '../../styles/onBoarding';

import moment from 'moment';
export default class Step3 extends React.Component {
  state = {
    chosenDate: null,
  };
  componentDidMount() {
    const user = this.props.user;
    this.setState({ chosenDate: user.birthdate ? new Date(user.birthdate.seconds * 1000) : new Date() });
  }
  render() {
    const { chosenDate } = this.state;
    if (!chosenDate) return null;
    console.log(moment(chosenDate, 'YYYY/MM/DD'));
    return (
      <View>
        <Text style={onBoardingStyles.title}>When is your birthday?</Text>
        <Text style={onBoardingStyles.help}>Be shared with the right audience.</Text>
        {/* <Text style={onBoardingStyles.help}>Saved Date: {moment(chosenDate).format('MMM Do YYYY')}</Text> */}
        <Form>
          <Item>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, marginTop: 20 }}>
                <DatePicker
                  defaultDate={chosenDate}
                  defaultValue={moment(chosenDate, 'YYYY/MM/DD')}
                  selected={moment(chosenDate, 'YYYY/MM/DD')}
                  minimumDate={new Date(1920, 1, 1)}
                  maximumDate={new Date(Date.now() - 60 * 60 * 24 * 365 * 18)}
                  locale={'en'}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={'fade'}
                  androidMode={'default'}
                  // placeHolderText="Select date"
                  textStyle={{ color: 'green' }}
                  style={{ width: '100%', textAlign: 'center' }}
                  placeHolderTextStyle={{ color: '#d3d3d3' }}
                  onDateChange={date => {
                    this.props.keyUpdate('birthdate', date);
                  }}
                  mode={'dropdown'}
                  disabled={false}
                />
              </View>
            </View>
          </Item>
        </Form>
      </View>
    );
  }
}
