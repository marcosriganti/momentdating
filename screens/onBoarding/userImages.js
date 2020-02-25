import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import onBoardingStyles from "../../styles/onBoarding";
import Logo from "../../components/Logo";
import { getUserDocument, setUserDocument, storage } from "../../firebase";
import Common from "../../styles/Common";
//
const ImageHeader = props => (
  <View
    style={{
      backgroundColor: "#fff",
      zIndex: 1,
      overflow: "hidden",
      paddingTop: 40,
      textAlign: "center",
      position: "relative"
    }}
  >
    <Image
      // style={StyleSheet.absoluteFill}
      style={{
        position: "absolute",
        marginTop: 30,
        width: "100%"
      }}
      source={require("../../assets/images/common/bg_pics.jpg")}
    />
    <Logo style={{ position: "relative", left: "50%", marginLeft: -65 }} />
  </View>
);

export default class userImages extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
    header: props => <ImageHeader {...props} />,

    headerStyle: {
      backgroundColor: "transparent",
      elevation: 0,

      borderBottomWidth: 0
    }
  };

  state = {
    image: null,
    primaryImage: null,
    images: [null, null, null],
    userId: "le8dhoFiRXCKrLyMIfo3" //forcing to show myself
  };
  componentDidMount = async () => {
    // const user = this.props.user;
    const user = await getUserDocument(this.state.userId);
    this.setState({ user: user });
    this.getPermissionAsync();
    if (user.images !== undefined) {
      this.setState({ images: user.images });
    }
  };

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      try {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== "granted") {
          Alert.alert(
            "Sorry, we need camera roll permissions to make this work!"
          );
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
      aspect: [4, 3]
    });

    if (!result.cancelled) {
      let images = this.state.images;
      images[index] = result.uri;

      uploadUrl = await this.props.uploadImageAsync(
        result.uri,
        this.props.user.uid
      );
      images[index] = uploadUrl;
      this.setState({ images });
      this.props.keyUpdate("images", images);
    }
  };

  render() {
    let { image, images, primaryImage } = this.state;
    const { user } = this.state;
    return (
      <ImageBackground
        source={require("../../assets/images/common/bg_pics.jpg")}
        style={{
          width: "100%",
          height: "100%",
          top: -25,
          resizeMode: "contain",
          paddingTop: 79
        }}
      >
        <View style={{ flex: 7, padding: 20 }}>
          <View
            style={{
              flex: 5,
              overflow: "hidden"
              // flexDirection: "row",
            }}
          >
            <View style={{ flex: 3 }}>
              <ImageBox index={0} images={images} onPress={this._pickImage} />
            </View>
            <View style={{ flex: 1, position: "relative", top: -30 }}>
              <View style={{ flex: 4, flexDirection: "row" }}>
                <View style={{ flex: 1, width: 70 }}>
                  <ImageBox
                    index={1}
                    images={images}
                    onPress={this._pickImage}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <ImageBox
                    index={2}
                    images={images}
                    onPress={this._pickImage}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              paddingHorizontal: 10,
              paddingTop: 40,
              justifyContent: "center"
            }}
          >
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={Common.btnPrimary}
                onPress={() => this.props.navigation.navigate("onBoarding")}
              >
                <Text style={Common.btnPrimaryText}>Continue</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={Common.helpText1}>
                please upload at least one picture of yourself to share photos
                of your active life
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const ImageBox = ({ images, index, onPress }) => {
  const image = images[index];
  return (
    <View>
      <TouchableOpacity
        onPress={() => onPress(index)}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 5
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 10,
            overflow: "visible"
          }}
        >
          {/* {image ? (
            <Ionicons
              name="ios-close-circle"
              size={26}
              color={`#D0021A`}
              style={{ top: -1, zIndex: 2 }}
            />
          ) : (
            <Ionicons
              name="ios-add-circle"
              size={26}
              color={`#54F7C7`}
              style={{ top: -1, zIndex: 2 }}
            />
          )} */}
          <View
            style={{
              backgroundColor: "#fff",
              position: "absolute",
              top: 4,
              left: 5,
              width: 15,
              height: 15,
              zIndex: 1
            }}
          ></View>
        </View>
        <View
          style={{
            borderColor: "#e5e5e5",
            borderWidth: 1,
            width: index != 0 ? "70%" : "90%",
            backgroundColor: "#fff",
            borderRadius: 600,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
            marginHorizontal: "auto",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            aspectRatio: 1
            // overflow: "hidden"
          }}
        >
          {image ? (
            <View
              style={{
                position: "relative",
                flex: 1,
                alignSelf: "stretch",
                borderRadius: 400,
                overflow: "hidden"
              }}
            >
              <Image source={{ uri: image }} style={{ flex: 1 }} />
            </View>
          ) : (
            <Image
              source={require("../../assets/images/common/add_image.png")}
              style={{ width: 50, height: 50 }}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
