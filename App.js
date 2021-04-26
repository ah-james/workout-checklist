import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState("Create a New Workout")
  const [workoutText] = useState("Name Your Workout")
  const [enteredWorkout, setEnteredWorkout] = useState('')
  const [workoutList, setWorkoutList] = useState([])

  const handleWorkoutInput = (enteredText) => {
    setEnteredWorkout(enteredText)
  }

  const addWorkout = () => {
    setWorkoutList(currentWorkouts => [...currentWorkouts, enteredWorkout])
    console.log(workoutList)
    setEnteredWorkout('')
  }

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder={workoutText} onChangeText={handleWorkoutInput} value={enteredWorkout} />
        <Button style={styles.button} title="Create" onPress={addWorkout} />
      </View>
      <View>
        {workoutList.map((workout) => <View style={styles.list}><Text key={workout}>{workout}</Text></View>)}
      </View>
      {/* <Button title="Change Text" onPress={() => setOutputText('Which Workout Are You Doing Today?')} /> */}
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
    width: 200,
    margin: 12,
    borderWidth: 1,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  list: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  }
});
