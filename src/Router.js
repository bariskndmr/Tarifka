import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './Pages/Categories';
import Meals from './Pages/Meals';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{
            headerStyle: {
              backgroundColor: '#ffa500',
            },
          }}
        />
        <Stack.Screen
          name="MealsPage"
          component={Meals}
          options={{
            headerStyle: {
              backgroundColor: '#ffa500',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
