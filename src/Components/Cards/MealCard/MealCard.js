import React from 'react';
import {View, Text} from 'react-native';
import Styles from './MealCard.style';

const MealCard = ({meal}) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{meal.strMeal}</Text>
    </View>
  );
};

export default MealCard;
