import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Form, Item, Input } from 'native-base';
import onBoardingStyles from '../../styles/onBoarding';

export default (Step2 = props => {
  return (
    <View>
      <Text style={onBoardingStyles.title}>What's Your Profession?</Text>
      <Text style={onBoardingStyles.help}>What you do is part of your identity.</Text>
      <Form>
        <Item floatingLabel>
          <Input
            placeholder="I'm an engineer, artist, student, venture capitalist"
            value={user.profession}
            onChangeText={text => this.keyUpdate('profession', text)}
          />
        </Item>
      </Form>
    </View>
  );
});
