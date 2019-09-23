import React from 'react';
import { View, Text } from 'react-native';
import { Form, Item, Input } from 'native-base';
import onBoardingStyles from '../../styles/onBoarding';
import { renderIcon, renderHelp } from '../../components/common/Validation';

export default Step0 = props => {
  const valid = props.validation['displayName'];
  return (
    <View>
      <Text style={onBoardingStyles.title}>What's Your Preferred Name?</Text>
      <Text style={onBoardingStyles.help}>
        Your name will be revelead only to the people when you get matched with.
      </Text>
      <Form>
        <Item error={valid != undefined ? valid.error : false} success={valid != undefined ? valid.success : false}>
          <Input
            placeholder="Preferred Name"
            value={props.user.displayName}
            onChangeText={text => props.keyUpdate('displayName', text)}
          />
          {renderIcon(valid)}
        </Item>
        {renderHelp(valid)}
      </Form>
    </View>
  );
};
