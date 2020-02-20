import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default StyleSheet.create({
  errorLabel: {
    color: "red",
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  centerVertical: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  btnDefault: {
    backgroundColor: Colors.lightColor,
    paddingVertical: 20,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center"
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center"
  },
  btnDefaultText: {
    color: Colors.darkColor,
    fontFamily: "freight-sans-medium",
    textAlign: "center",
    fontSize: 22
  },
  btnImage: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginRight: 10,
    resizeMode: "stretch"
  },
  btnPrimary: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 20,
    borderRadius: 40,
    marginBottom: 15
  },
  btnPrimaryText: {
    color: Colors.lightColor,
    textAlign: "center",
    fontFamily: "freight-sans-medium",
    fontSize: 22
  },
  buttonText: {
    backgroundColor: "transparent",
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff"
  },
  buttonWrapper: {
    padding: 15,
    alignItems: "center",
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 40
  }
});
