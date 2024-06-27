import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LogMoodScreen from './screens/LogMoodScreen';
import MoodTrendsScreen from './screens/MoodTrendsScreen';
import AddPhotoScreen from './screens/AddPhotoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LogMoodScreen" component={LogMoodScreen} />
        <Stack.Screen name="MoodTrendsScreen" component={MoodTrendsScreen} />
        <Stack.Screen name="AddPhotoScreen" component={AddPhotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
