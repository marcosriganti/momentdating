import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Form, Item, Input } from 'native-base';
import onBoardingStyles from '../../styles/onBoarding';
import { ImagePicker } from 'expo-image-picker';
import Constants from 'expo-constants';
import Permissions from 'expo-permissions';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class Step1 extends React.Component {
  state = {
    image: null,
  };
  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    console.log('>> getPermissionAsync', Constants.platform);
    if (Constants.platform.ios) {
      const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
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
        <Text style={onBoardingStyles.help}>Pick up to 3 Pictures.</Text>
        <Form>
          <TouchableOpacity onPress={this._pickImage}>
            <View>
              <Text>Pick image</Text>
            </View>
          </TouchableOpacity>
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
