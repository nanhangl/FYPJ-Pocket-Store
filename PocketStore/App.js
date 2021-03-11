import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SignInScreen from './screens/SignInScreen';
import NewLoanScreen from './screens/NewLoanScreen'
import AddItemsScreen from './screens/AddItemsScreen';
import DetailsScreen from './screens/DetailsScreen';
import LoansScreen from './screens/LoansScreen';
import ManageScreen from './screens/ManageScreen';
import Icon from 'react-native-ionicons'
import {AppearanceProvider} from 'react-native-appearance';
import {ThemeProvider} from './screens/context/ThemeContext';
import {useTheme} from './screens/context/ThemeContext';
import {Text} from 'react-native'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function UserHome() {
  const {colors, isDark} = useTheme();

  return (
    <Tab.Navigator tabBarOptions={{style: {backgroundColor: colors.background}}}>
        <Tab.Screen name="New Loan" component={NewLoanScreen} options={{tabBarIcon: ({focused}) => {return <Icon name="medkit" size={20} color={focused ? "#007aff" : "#c0c0c0"} />}}} />
        <Tab.Screen name="My Loans" component={LoansScreen} options={{tabBarIcon: ({focused}) => {return <Icon name="filing" size={20} color={focused ? "#007aff" : "#c0c0c0"} />}}} />
    </Tab.Navigator>
  );
}

function ManagerHome() {
  const {colors, isDark} = useTheme();

  return (
    <Tab.Navigator tabBarOptions={{style: {backgroundColor: colors.background}}}>
        <Tab.Screen name="Manage Loans" component={ManageScreen} options={{tabBarIcon: ({focused}) => {return <Icon name="checkbox" size={20} color={focused ? "#007aff" : "#c0c0c0"} />}}} />
    </Tab.Navigator>
  );
}

const App = ({navigation}) => {
  const {colors, isDark} = useTheme();
  return (
    <AppearanceProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="PocketStore" component={SignInScreen} />
            <Stack.Screen name="UserHome" component={UserHome} options={{headerShown:false}} />
            <Stack.Screen name="ManagerHome" component={ManagerHome} options={{title:"Manage Loans"}} />
            <Stack.Screen name="Add Items" component={AddItemsScreen} />
            <Stack.Screen name="Loan Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AppearanceProvider>
   );
}

export default App;
