import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState("Create a New Workout")
  const [workoutText] = useState("Name Your Workout")
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <TextInput style={styles.input} placeholder={workoutText}></TextInput>
      <Button title="Create a New Workout"/>
      <Button title="Change Text" onPress={() => setOutputText('Which Workout Are You Doing Today?')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
