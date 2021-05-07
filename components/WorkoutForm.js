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
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 7,
    padding: 20,
    borderRadius: 15,
  },
    input: {
      height: 40,
      width: 200,
      margin: 12,
      borderWidth: 1,
    },
    buttons: {
      width: 150,
      justifyContent: 'space-between',
      flexDirection: 'row',
    }
});

export default WorkoutForm