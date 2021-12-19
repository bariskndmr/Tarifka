import React from 'react';
import {FlatList, View} from 'react-native';
import Styles from './Categories.style';

import {CATEGORY_URL} from '@env';

import CategoriesCard from '../../Components/Cards/CategoriesCard';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import useFetch from '../../Hooks/useFetch';

const Categories = ({navigation}) => {
  const {data, error, loading} = useFetch(CATEGORY_URL);

  const handleSelectMeals = strCategory => {
    navigation.navigate('MealsPage', [strCategory]);
  };

  const renderCategories = ({item}) => (
    <CategoriesCard
      category={item}
      onSelect={() => handleSelectMeals(item.strCategory)}
    />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={Styles.container}>
      <FlatList data={data.categories} renderItem={renderCategories} />
    </View>
  );
};

export default Categories;
