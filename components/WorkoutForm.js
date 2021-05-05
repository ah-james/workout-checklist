import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Modal, Text } from 'react-native';

const WorkoutForm = props => {
  const [outputText] = useState("Create a New Workout")
  const [enteredWorkout, setEnteredWorkout] = useState('')

  const handleWorkoutInput = (enteredText) => {
    setEnteredWorkout(enteredText)
  }

  return (
    <Modal visible={props.visible}>
      <View style={styles.form}>
        {/* <Text>{outputText}</Text> */}
        <TextInput style={styles.input} placeholder={props.workoutText} onChangeText={handleWorkoutInput} value={enteredWorkout} />
        <Button style={styles.button} title="Create" onPress={() => {props.addWorkout(enteredWorkout), setEnteredWorkout('')}} />
      </View>
    </Modal>
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