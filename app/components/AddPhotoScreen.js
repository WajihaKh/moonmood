import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function AddPhotoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Photo</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('Open camera')}>
        <FontAwesome name="camera" size={24} color="#333" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Take a Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert('Open image picker')}>
        <FontAwesome name="image" size={24} color="#333" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Choose from Gallery</Text>
      </TouchableOpacity>
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d1e7dd', // Sage green
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
});
