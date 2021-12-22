import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Styles from './Meals.style';

import {MEALS_URL} from '@env';

import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import useFetch from '../../Hooks/useFetch';
import MealCard from '../../Components/Cards/MealCard';

const Meals = ({route, navigation}) => {
  const strCategory = route.params;
  const {loading, data, error} = useFetch(`${MEALS_URL}${strCategory}`);

  const handleSelectDetails = idMeal => {
    navigation.navigate('DetailPage', {idMeal});
  };

  const renderMeals = ({item}) => {
    return (
      <MealCard meal={item} onSelect={() => handleSelectDetails(item.idMeal)} />
    );
  };

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={data.meals}
        renderItem={renderMeals}
        keyExtractor={data => data.idMeal}
      />
    </SafeAreaView>
  );
};

export default Meals;
