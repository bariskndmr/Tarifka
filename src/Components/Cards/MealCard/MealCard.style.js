import {StyleSheet, Dimensions} from 'react-native';

const Device = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Device.height / 5,
    justifyContent: 'flex-end',
  },
  title: {
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding: 5,
    backgroundColor: '#000000c0',
  },
});
