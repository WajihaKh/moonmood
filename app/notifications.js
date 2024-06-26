import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import LogMoodScreen from './components/LogMoodScreen';
import MoodTrendsScreen from './components/MoodTrendsScreen';
import AddPhotoScreen from './components/AddPhotoScreen';
import { registerForPushNotificationsAsync } from './notifications';

const Stack = createStackNavigator();

export default function App() {
  React.useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LogMood" component={LogMoodScreen} />
        <Stack.Screen name="MoodTrends" component={MoodTrendsScreen} />
        <Stack.Screen name="AddPhoto" component={AddPhotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
