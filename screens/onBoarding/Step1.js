import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { Form, Item, Input } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import onBoardingStyles from '../../styles/onBoarding';
//
const ImageBox = ({ images, index, onPress }) => {
  const image = images[index];
  return (
    <TouchableOpacity
      onPress={() => onPress(index)}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 10,
          overflow: 'visible',
        }}
      >
        {image ? (
          <Ionicons name="ios-close-circle" size={26} color={`#D0021A`} style={{ top: -1, zIndex: 2 }} />
        ) : (
          <Ionicons name="ios-add-circle" size={26} color={`#54F7C7`} style={{ top: -1, zIndex: 2 }} />
        )}
        <View
          style={{ backgroundColor: '#fff', position: 'absolute', top: 4, left: 5, width: 15, height: 15, zIndex: 1 }}
        ></View>
      </View>
      <View
        style={{
          borderColor: '#979797',
          borderWidth: 1,
          width: '100%',
          backgroundColor: '#e5e5e5',
          borderRadius: 10,
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          aspectRatio: 1,
          overflow: 'hidden',
        }}
      >
        {image ? (
          <View style={{ position: 'relative', flex: 1, alignSelf: 'stretch' }}>
            <Image source={{ uri: image }} style={{ flex: 1, alignSelf: 'stretch' }} />
          </View>
        ) : (
          <Ionicons name="md-camera" size={45} color={`#fff`} />
        )}
      </View>
    </TouchableOpacity>
  );
};
export default class Step1 extends React.Component {
  state = {
    image: null,
    primaryImage: null,
    images: [null, null, null],
  };
  componentDidMount() {
    const user = this.props.user;
    this.getPermissionAsync();
    if (user.images !== undefined) {
      this.setState({ images: user.images });
    }
  }

  getPermissionAsync = async () => {
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

  _pickImage = async (index, i) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    // console.log(result);

    if (!result.cancelled) {
      let images = this.state.images;
      images[index] = result.uri;
      console.log(result.uri, 'index', index);
      // this.setState({ image: result.uri });
      this.setState({ images });
    }
  };

  render() {
    let { image, images, primaryImage } = this.state;
    const { user } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text style={onBoardingStyles.title}>Share Photos of your active life</Text>
          <Text style={onBoardingStyles.help}>Select up to 3 pictures.</Text>
        </View>
        <View style={{ flex: 2, flexDirection: 'row', marginTop: 20 }}>
          <View style={{ flex: 2 }}>
            <ImageBox index={0} images={images} onPress={this._pickImage} />
          </View>

          <View style={{ flex: 1, paddingBottom: 20 }}>
            <ImageBox index={1} images={images} onPress={this._pickImage} />
            <ImageBox index={2} images={images} onPress={this._pickImage} />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={onBoardingStyles.title}>{user.displayName}</Text>
        </View>

        {/* <Item floatingLabel>
            <Input
              placeholder="I'm an engineer, artist, student, venture capitalist"
              value={user.profession}
              onChangeText={text => this.keyUpdate('profession', text)}
            />
          </Item> */}
      </View>
    );
  }
}
