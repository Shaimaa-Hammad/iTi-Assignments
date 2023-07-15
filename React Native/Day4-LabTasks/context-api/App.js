import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UsersContext } from './Contexts/usersContext';
import UsersScreen from './Screens/usersScreen';
import UserDetailsScreen from './Screens/userDetailsScreen';
// import { UsersContext } from './Contexts/usersContext';
// import UsersScreen from './Screens/usersScreen';
// import UserDetailsScreen from './Screens/userDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <UsersContext>
        <Stack.Navigator>
          <Stack.Screen name="Users" component={UsersScreen} />
          <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
        </Stack.Navigator>
      </UsersContext>
    </NavigationContainer>
  );
};

export default App;
