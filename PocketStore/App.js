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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SignInScreen from './screens/SignInScreen';
import NewLoansScreen from './screens/NewLoanScreen'
import AddItemsScreen from './screens/AddItemsScreen';
import DetailsScreen from './screens/DetailsScreen';
import LoansScreen from './screens/LoansScreen';
import ManageScreen from './screens/ManageScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Manage Loans" component={ManageScreen} />
        <Stack.Screen name="My Loans" component={LoansScreen} />
        <Stack.Screen name="Loan Details" component={DetailsScreen} />
        <Stack.Screen name="Add Items" component={AddItemsScreen} />
        <Stack.Screen name="New Loan" component={NewLoansScreen} />
        <Stack.Screen name="Welcome to PocketStore" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    /*
      <Tab.Navigator>
        <Tab.Screen name="New Loan" component={NewLoansScreen} />
        <Tab.Screen name="My Loans" component={LoansScreen} />
      </Tab.Navigator>    
    */
  );
}

export default App;
