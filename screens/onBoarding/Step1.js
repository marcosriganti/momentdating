import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { Form, Item, Input } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import onBoardingStyles from '../../styles/onBoarding';

export default class Step1 extends React.Component {
  state = {
    image: null,
  };
  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    console.log('>> getPermissionAsync');

    if (Constants.platform.ios) {
      try {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera roll permissions to make this work!');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    let { image } = this.state;

    return (
      <View>
        <Text style={onBoardingStyles.title}>Share Photos of your active life</Text>
        <Text style={onBoardingStyles.help}>Select up to 3 pictures.</Text>
        <Form>
          <View style={{ flex: 1 }}>
            <Ionicons name="md-image" size={250} color={`#e5e5e5`} style={{ textAlign: 'center' }} />
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={this._pickImage}>
                <View>
                  <Ionicons name="md-image" size={80} color={`#969696`} style={{ textAlign: 'center' }} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={this._pickImage}>
                <View>
                  <Ionicons name="md-image" size={80} color={`#969696`} style={{ textAlign: 'center' }} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={this._pickImage}>
                <View>
                  <Ionicons name="md-image" size={80} color={`#969696`} style={{ textAlign: 'center' }} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* <TouchableOpacity onPress={this._pickImage}>
            <View>
              <Text>Pick image</Text>
            </View>
          </TouchableOpacity> */}
          {/** Display selected image */}
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

          {/* <Item floatingLabel>
            <Input
              placeholder="I'm an engineer, artist, student, venture capitalist"
              value={user.profession}
              onChangeText={text => this.keyUpdate('profession', text)}
            />
          </Item> */}
        </Form>
      </View>
    );
  }
}
