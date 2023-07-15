import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Src/Screens/SectionList';
import AddTasksScreen from './Src/Screens/ToDoList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddTasks" component={AddTasksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
