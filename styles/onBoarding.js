import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 40,

    alignContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.darkColor,
    textAlign: 'center',
    marginBottom: 10,
  },
  help: {
    color: Colors.darkColor,
    textAlign: 'center',
    fontSize: 14,
  },
  iconWrapper: {
    backgroundColor: '#D8D8D8',
    padding: 30,
    borderRadius: 90,
    width: 120,
    height: 120,
  },
  iconLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#969696',
  },
});
