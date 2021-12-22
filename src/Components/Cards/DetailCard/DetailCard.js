import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Styles from './DetailCard.style';

const DetailCard = ({item}) => {
  const {strMeal, strMealThumb, strInstructions} = item;
  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={{uri: strMealThumb}} />
      <Text style={Styles.title}>{strMeal}</Text>
      <Text style={Styles.description}>{strInstructions}</Text>
      <TouchableOpacity style={Styles.button}>
        <Text style={Styles.buttonText}>Watch On Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailCard;
