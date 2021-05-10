import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import WorkoutsHome from './containers/WorkoutsHome'
import WorkoutScreen from './containers/WorkoutScreen'

export default function App() {
  const [workoutNumber, setWorkoutNumber] = useState()

  const chooseWorkout = chosenWorkoutNumber => {
    setWorkoutNumber(chosenWorkoutNumber)
  }

  let content = <WorkoutsHome chooseWorkout={chooseWorkout}/>

  if (workoutNumber) {
    content = <WorkoutScreen />
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {content}
        {/* <StatusBar style="auto" /> */}
    </TouchableWithoutFeedback>
  );
}
