import React, {useState} from 'react'
import {StyleSheet, View, Text, Button, TextInput} from 'react-native'

const ExerciseForm = props => {
    const [enteredExercise, setEnteredExercise] = useState('')

    const handleExerciseInput = enteredText => {
        setEnteredExercise(enteredText)
    }

    return(
        <View style={styles.container}>
            <Text>Add A Workout</Text>
            <TextInput styles={styles.inputField} placeholder={'Enter a New Exercise'} value={enteredExercise} onChangeText={handleExerciseInput} />
            <Button title={'Add'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 80,
        marginVertical: 76,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
      },
})

export default ExerciseForm