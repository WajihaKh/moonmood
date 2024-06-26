import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LogMoodScreen() {
  const [mood, setMood] = useState('');
  const [notes, setNotes] = useState('');

  const handleSave = () => {
    // Logic to save mood and notes
    console.log('Mood:', mood, 'Notes:', notes);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Log your Mood:</Text>
      <TextInput style={styles.input} value={mood} onChangeText={setMood} placeholder="Happy, Sad, etc." />
      <Text style={styles.label}>Notes:</Text>
      <TextInput style={styles.input} value={notes} onChangeText={setNotes} placeholder="Additional notes" multiline />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
});
