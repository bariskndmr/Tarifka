import React from 'react';
import {FlatList} from 'react-native';
/* import Styles from './Detail.style'; */

import {DETAIL_URL} from '@env';

import DetailCard from '../../Components/Cards/DetailCard';
import Error from '../../Components/Error';
import Loading from '../../Components/Loading';
import useFetch from '../../Hooks/useFetch';

const Detail = ({route}) => {
  const {idMeal} = route.params;
  const {loading, error, data} = useFetch(`${DETAIL_URL}${idMeal}`);

  const renderDetailCard = ({item}) => {
    return <DetailCard item={item} />;
  };

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <FlatList
      data={data.meals}
      renderItem={renderDetailCard}
      keyExtractor={item => item.idMeal}
    />
  );
};

export default Detail;
