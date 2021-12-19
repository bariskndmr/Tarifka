import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Styles from './CategoriesCard.style';

const CategoriesCard = ({category, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={Styles.container}>
        <View style={Styles.imageContainer}>
          <Image
            style={Styles.image}
            source={{uri: category.strCategoryThumb}}
          />
        </View>
        <Text style={Styles.text}>{category.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriesCard;
