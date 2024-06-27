import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MoodTrendsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Trends</Text>
      <Text style={styles.placeholder}>Mood trends will be displayed here...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  placeholder: {
    fontSize: 16,
    color: '#666',
  },
});
