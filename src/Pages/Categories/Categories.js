import React from 'react';
import {FlatList, View} from 'react-native';
import Styles from './Categories.style';

import {CATEGORY_URL} from '@env';

import CategoriesCard from '../../Components/Cards/CategoriesCard';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import useFetch from '../../Hooks/useFetch';

const Categories = () => {
  const {data, error, loading} = useFetch(CATEGORY_URL);

  const renderCategories = ({item}) => <CategoriesCard category={item} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={Styles.container}>
      <FlatList
        data={data.categories}
        renderItem={renderCategories}
        keyExtractor={item => item.idCategory}
      />
    </View>
  );
};

export default Categories;
