import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Moon Mood</Text>
      <Button title="Log Daily Mood" onPress={() => navigation.navigate('LogMood')} />
      <Button title="View Mood Trends" onPress={() => navigation.navigate('MoodTrends')} />
      <Button title="Add Photo" onPress={() => navigation.navigate('AddPhoto')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
