import React from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native';

const WorkoutForm = props => {
    return (
        <View style={styles.form}>
            <TextInput style={styles.input} placeholder={props.workoutText} onChangeText={props.handleWorkoutInput} value={props.enteredWorkout} />
            <Button style={styles.button} title="Create" onPress={props.addWorkout} />
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