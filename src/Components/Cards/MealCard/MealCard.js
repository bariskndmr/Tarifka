import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  View,
} from 'react-native';
import Styles from './MealCard.style';

const MealCard = ({meal}) => {
  return (
    <TouchableWithoutFeedback>
      <View style={Styles.container}>
        <ImageBackground style={Styles.image} source={{uri: meal.strMealThumb}}>
          <Text style={Styles.title}>{meal.strMeal}</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
