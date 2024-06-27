import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function LogMoodScreen() {
  const [mood, setMood] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log Daily Mood</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your mood"
        placeholderTextColor="#888"
        value={mood}
        onChangeText={setMood}
      />
      <TextInput
        style={styles.textarea}
        placeholder="Add notes (optional)"
        placeholderTextColor="#888"
        value={notes}
        onChangeText={setNotes}
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={() => alert('Mood logged!')}>
        <Text style={styles.buttonText}>Save Mood</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textarea: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#d1e7dd',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: '500',
  },
});
