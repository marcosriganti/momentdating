import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Form, Item, Input } from 'native-base';
import onBoardingStyles from '../../styles/onBoarding';
import { renderIcon, renderHelp } from '../../components/common/Validation';

export default Step2 = props => {
  const valid = props.validation['profession'];
  return (
    <View>
      <Text style={onBoardingStyles.title}>What's Your Profession?</Text>
      <Text style={onBoardingStyles.help}>What you do is part of your identity.</Text>
      <Form>
        <Item error={valid != undefined ? valid.error : false} success={valid != undefined ? valid.success : false}>
          <Input
            placeholder="I'm an engineer, artist, student, venture capitalist"
            value={props.user.profession}
            onChangeText={text => props.keyUpdate('profession', text)}
          />
          {renderIcon(valid)}
        </Item>
        {renderHelp(valid)}
      </Form>
    </View>
  );
};
