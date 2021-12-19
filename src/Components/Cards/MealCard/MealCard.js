import React from 'react';
import {View, Text} from 'react-native';
import Styles from './MealCard.style';

const MealCard = ({meals}) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{meals.strMeal}</Text>
    </View>
  );
};

export default MealCard;
