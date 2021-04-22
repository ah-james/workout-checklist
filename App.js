import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState("Select Your Workout")
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
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
});
