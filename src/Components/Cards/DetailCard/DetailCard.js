import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Styles from './DetailCard.style';

const DetailCard = ({detail}) => {
  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={{uri:detail.strMealThumb}} />
      <Text style={Styles.title}>{detail.strMeal}</Text>
      <Text style={Styles.description}>{detail.strInstructions}</Text>
      <TouchableOpacity style={Styles.button}>
        <Text style={Styles.buttonText}>Watch On Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailCard;
