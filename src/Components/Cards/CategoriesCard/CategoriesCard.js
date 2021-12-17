import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './CategoriesCard.style';

const CategoriesCard = ({category}) => {
  return (
    <View style={Styles.container}>
      <Image
        style={Styles.image}
        source={{uri: category.categories.strCategoryThumb}}
      />
      <Text style={Styles.text}>{category.categories.strCategory}</Text>
    </View>
  );
};

export default CategoriesCard;
