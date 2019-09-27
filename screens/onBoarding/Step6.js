import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import onBoardingStyles from '../../styles/onBoarding';
import { ListItem, CheckBox, Body } from 'native-base';
import { questions } from '../questions';
export const Step5 = props => {
  const { questionIndex } = props;
  return (
    <View>
      <Text style={onBoardingStyles.title}> {questions[questionIndex].title}</Text>
      <Text style={onBoardingStyles.lightHelp}>
        {questionIndex + 1}/{questions.length}
      </Text>
      <View
        style={{
          marginVertical: 20,
          paddingVertical: 20,
        }}
      >
        <Text style={onBoardingStyles.lightTitle}> {questions[questionIndex].q}</Text>
        {questions[questionIndex].a.map((answer, index) => (
          <LinearGradient
            key={`${index}`}
            colors={['#5CA7EB', '#53F3FD']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={{ marginVertical: 10, borderRadius: 20 }}
          >
            <ListItem onPress={() => this.keyUpdate('question_' + questionIndex, answer)}>
              <Body>
                <Text style={{ color: '#fff' }}>{answer}</Text>
              </Body>
              <CheckBox
                checked={
                  user['question_' + questionIndex] && user['question_' + questionIndex] == answer ? true : false
                }
                value={answer}
              />
            </ListItem>
          </LinearGradient>
        ))}
      </View>
    </View>
  );
};
