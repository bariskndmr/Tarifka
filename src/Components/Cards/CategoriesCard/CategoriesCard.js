import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './CategoriesCard.style';

const CategoriesCard = ({category}) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.imageContainer}>
        <Image style={Styles.image} source={{uri: category.strCategoryThumb}} />
      </View>
      <Text style={Styles.text}>{category.strCategory}</Text>
    </View>
  );
};

export default CategoriesCard;
