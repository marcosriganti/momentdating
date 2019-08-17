import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Form, Item, Input } from 'native-base';
import onBoardingStyles from '../../styles/onBoarding';

export default (Step0 = props => {
  return (
    <View>
      <Text style={onBoardingStyles.title}>What's Your Preferred Name?</Text>
      <Text style={onBoardingStyles.help}>
        Your name will be revelead only to the people when you get matched with.
      </Text>
      <Form>
        <Item floatingLabel>
          {/* <Label>Name</Label> */}

          <Input
            placeholder="Preferred Name"
            value={props.user.displayName}
            onChangeText={text => props.keyUpdate('displayName', text)}
          />
        </Item>
      </Form>
    </View>
  );
});
