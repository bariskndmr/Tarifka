import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Styles from './Meals.style';

import {MEALS_URL} from '@env';

import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import useFetch from '../../Hooks/useFetch';
import MealCard from '../../Components/Cards/MealCard';

const Meals = ({route}) => {
  const strCategory = route.params;
  const {loading, data, error} = useFetch(`${MEALS_URL}${strCategory}`);

  const renderMeals = ({item}) => {
    return <MealCard meal={item} />;
  };

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </SafeAreaView>
  );
};

export default Meals;
