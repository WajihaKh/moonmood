import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Moon Mood</Text>
      <Text style={styles.subtitle}>Track and Reflect on Your Daily Moods</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LogMoodScreen')}>
        <FontAwesome name="edit" size={24} color="#333" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Log Daily Mood</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MoodTrendsScreen')}>
        <FontAwesome name="line-chart" size={24} color="#333" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>View Mood Trends</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddPhotoScreen')}>
        <FontAwesome name="camera" size={24} color="#333" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Add Photo</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>“Your mood is the reflection of your soul”</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d1e7dd',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: '500',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});
