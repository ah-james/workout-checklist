import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native';

const WorkoutForm = props => {

  const [enteredWorkout, setEnteredWorkout] = useState('')

  const handleWorkoutInput = (enteredText) => {
    setEnteredWorkout(enteredText)
  }

  return (
      <View style={styles.form}>
          <TextInput style={styles.input} placeholder={props.workoutText} onChangeText={handleWorkoutInput} value={enteredWorkout} />
          <Button style={styles.button} title="Create" onPress={() => {props.addWorkout(enteredWorkout), setEnteredWorkout('')}} />
      </View>
  )
}

const styles = StyleSheet.create({
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
});

export default WorkoutForm