import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  View,
} from 'react-native';
import Styles from './MealCard.style';

const MealCard = ({meal, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={Styles.container}>
        <ImageBackground
          imageStyle={{borderRadius: 10}}
          style={Styles.image}
          source={{uri: meal.strMealThumb}}>
          <Text numberOfLines={1} style={Styles.title}>
            {meal.strMeal}
          </Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
