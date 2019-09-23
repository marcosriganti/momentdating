import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  errorLabel: {
    color: 'red',
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  centerVertical: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    backgroundColor: 'transparent',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonWrapper: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 40,
  },
});
