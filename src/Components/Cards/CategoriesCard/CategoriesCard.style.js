import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 7,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#bcaaa4',
    borderWidth: 2,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  imageContainer: {padding: 10},
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  text: {
    fontWeight: '500',
    fontSize: 18,
  },
});
