import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Modal, Text } from 'react-native';

const WorkoutForm = props => {
  const [outputText] = useState("Create a New Workout")
  const [enteredWorkout, setEnteredWorkout] = useState('')

  const handleWorkoutInput = (enteredText) => {
    setEnteredWorkout(enteredText)
  }

  return (
    <Modal visible={props.visible} animationType='fade'>
      <View style={styles.form}>
        <Text>{outputText}</Text>
        <TextInput style={styles.input} placeholder={props.workoutText} onChangeText={handleWorkoutInput} value={enteredWorkout} />
        <Button style={styles.button} title="Create" onPress={() => {props.addWorkout(enteredWorkout), setEnteredWorkout('')}} />
        <Button style={styles.button} title="Cancel" onPress={props.cancel} />
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
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
});

export default WorkoutForm