import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import WorkoutList from './components/WorkoutList'
import WorkoutForm from './components/WorkoutForm'

export default function App() {
  const [outputText, setOutputText] = useState("Create a New Workout")
  const [workoutText] = useState("Name Your Workout")
  const [workoutList, setWorkoutList] = useState([])

  const addWorkout = () => {
    setWorkoutList(currentWorkouts => [...currentWorkouts, enteredWorkout])
    console.log(workoutList)
    setEnteredWorkout('')
  }

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <WorkoutForm workoutText={workoutText} addWorkout={addWorkout}/>
      <WorkoutList workoutList={workoutList}/>
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
    marginTop: 40,
  },
});
