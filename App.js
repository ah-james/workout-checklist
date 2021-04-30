import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WorkoutList from './components/WorkoutList'
import WorkoutForm from './components/WorkoutForm'

export default function App() {
  const [outputText] = useState("Create a New Workout")
  const [workoutText] = useState("Name Your Workout")
  const [workoutList, setWorkoutList] = useState([])

  const addWorkout = newWorkout => {
    setWorkoutList(currentWorkouts => [...currentWorkouts, { id: Math.random().toString(), value: newWorkout}])
    console.log(workoutList)
    // setEnteredWorkout('')
  }

  // const removeWorkout = input => {
  //   setWorkoutList(currentList => {
  //     return currentList.filter((workout) => workout !== input)
  //   })
  // }

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <WorkoutForm workoutText={workoutText} addWorkout={addWorkout} />
      <WorkoutList workoutList={workoutList} />
      {/* delete={removeWorkout} */}
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
    marginTop: 80,
  },
});
