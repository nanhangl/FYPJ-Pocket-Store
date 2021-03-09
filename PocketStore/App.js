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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus as faPlusSolid, faClipboardList as faClipboardListSolid, faCheckSquare as faCheckSquareSolid } from '@fortawesome/free-solid-svg-icons'
import { faPlus as faPlusRegular, faClipboardList as faClipboardListRegular, faCheckSquare as faCheckSquareRegular } from '@fortawesome/free-regular-svg-icons'
import { Text, TouchableOpacity }  from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function UserHome() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="New Loan" component={NewLoansScreen} />
        <Tab.Screen name="My Loans" component={LoansScreen} />
    </Tab.Navigator>
  );
}

function ManagerHome() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Manage Loans" component={ManageScreen} />
    </Tab.Navigator>
  );
}

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PocketStore" component={SignInScreen} />
        <Stack.Screen name="UserHome" component={UserHome} />
        <Stack.Screen name="ManagerHome" component={ManagerHome} />
        <Stack.Screen name="Add Items" component={AddItemsScreen} options={{headerRight: () => (
          <TouchableOpacity style={{marginRight:15}} onPress={() => {navigation}}>
            <Text style={{color:"#007aff"}}>Done</Text>
          </TouchableOpacity>
        )}} />
        <Stack.Screen name="Loan Details" component={DetailsScreen} />
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
