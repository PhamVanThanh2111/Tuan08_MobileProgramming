import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Javascript/Screen1_lab5_b'
import Screen2 from './Javascript/Screen2_lab5_b'
import Screen3 from './Javascript/Screen3_lab5_b'

const Stack = createStackNavigator();

const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;