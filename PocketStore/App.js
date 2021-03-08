/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/SignInScreen';
import NewLoansScreen from './screens/NewLoanScreen'
import AddItemsScreen from './screens/AddItemsScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="AddItemsScreen" component={AddItemsScreen} />
        <Stack.Screen name="NewLoans" component={NewLoansScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
