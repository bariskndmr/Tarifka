import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: width,
    height: height / 3,
    resizeMode: 'cover',
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: '#c1c1c1',
    padding: 5,
  },
  titleTextProps: {
    color: '#a6292a',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
  },
  country: {
    fontSize: 18,
  },
  description: {
    padding: 5,
  },
  button: {
    backgroundColor: '#ff0100',
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
