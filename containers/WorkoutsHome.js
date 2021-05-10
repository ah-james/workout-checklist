import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import WorkoutList from '../components/WorkoutList'
import WorkoutForm from '../components/WorkoutForm'
import Header from '../components/Header'
import Colors from '../constants/colors'

const WorkoutsHome = props => {
  const [workoutText] = useState("  Name Your Workout")
  const [workoutList, setWorkoutList] = useState([])
  const [isCreateWorkout, setIsCreateWorkout] = useState(false)

  const addWorkout = newWorkout => {
    setWorkoutList(currentWorkouts => [...currentWorkouts, { id: Math.random().toString(), value: newWorkout}])
    console.log(workoutList)
    setIsCreateWorkout(false)
  }

  const cancel = () => {
    setIsCreateWorkout(false)
  }

  const removeWorkout = workoutId => {
    // console.log(workoutId)
    setWorkoutList(currentList => {
      return currentList.filter((workout) => workout.id !== workoutId)
    })
  }

  const checkDelete = workoutId => {
      Alert.alert(
          'Are you sure?',
          'Do you want to delete?',
          [{text: 'Cancel', style: 'cancel', onPress: cancel}, {text: 'Delete', style: 'default', onPress: removeWorkout(workoutId)}]
      )
  }

  return (
    <View style={styles.container}>
        <Header title={"Welcome to Your Workout Manager"} />
        <Button style={styles.buttonContainer} title={'Add New Workout'} onPress={() => setIsCreateWorkout(true)} color={Colors.secondary} />
        <WorkoutForm cancel={cancel} visible={isCreateWorkout} workoutText={workoutText} addWorkout={addWorkout} />
        <WorkoutList workoutList={workoutList} checkDelete={checkDelete} chooseWorkout={props.chooseWorkout} />
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
    // marginTop: 80,
    marginVertical: 76
  },
  buttonContainer: {
      marginVertical: 10,
      paddingTop: 10
  }
});

export default WorkoutsHome