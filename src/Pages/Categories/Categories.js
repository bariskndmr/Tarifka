import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';

import CategoriesCard from '../../Components/Cards/CategoriesCard';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import useFetch from '../../Hooks/useFetch';

const Categories = () => {
  const {data, error, loading} = useFetch(Config.CATEGORY_URL);

  const renderCategories = ({item}) => <CategoriesCard category={item} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderCategories}
      keyExtractor={item => item.idCategory}
    />
  );
};

export default Categories;
