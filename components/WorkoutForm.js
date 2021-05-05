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
        <View style={styles.buttons}>
          <Button title="Cancel" onPress={props.cancel} />
          <Button title="Create" onPress={() => {props.addWorkout(enteredWorkout), setEnteredWorkout('')}} />
        </View>
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
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttons: {
      width: 150,
      justifyContent: 'space-between',
      flexDirection: 'row',
    }
});

export default WorkoutForm