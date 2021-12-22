import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import Styles from './DetailCard.style';

const DetailCard = ({item}) => {
  const {strMeal, strMealThumb, strInstructions, strArea, strYoutube} = item;
  return (
    <SafeAreaView style={Styles.container}>
      <Image style={Styles.image} source={{uri: strMealThumb}} />
      <View style={Styles.titleContainer}>
        <Text style={[Styles.title, Styles.titleTextProps]}>{strMeal}</Text>
        <Text style={[Styles.country, Styles.titleTextProps]}>{strArea}</Text>
      </View>
      <Text style={Styles.description}>{strInstructions}</Text>
      <TouchableOpacity
        style={Styles.button}
        onPress={() => Linking.openURL(strYoutube)}>
        <Text style={Styles.buttonText}>Watch On Youtube</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DetailCard;
