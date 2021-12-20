import React from 'react';
import {FlatList} from 'react-native';
import Styles from './Detail.style';

import {DETAIL_URL} from '@env';

import DetailCard from '../../Components/Cards/DetailCard';
import Error from '../../Components/Error';
import Loading from '../../Components/Loading';
import useFetch from '../../Hooks/useFetch';

const Detail = ({route}) => {
  const {idMeal} = route.params;
  const {loading, error, data} = useFetch(`${DETAIL_URL}${idMeal}`);

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }

  const renderDetailCard = ({item}) => {
    return <DetailCard detail={item} />;
  };

  return (
    <FlatList
      style={Styles.container}
      data={data.meals}
      renderItem={renderDetailCard}
    />
  );
};

export default Detail;
