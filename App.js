import { StatusBar } from 'expo-status-bar';
import React from 'react';
import WorkoutsHome from './containers/WorkoutsHome'
// import { StyleSheet, Text, View, Button, ProgressViewIOSComponent } from 'react-native';
// import WorkoutList from './components/WorkoutList'
// import WorkoutForm from './components/WorkoutForm'
// import Header from './components/Header'

export default function App() {
  // const [workoutText] = useState("Name Your Workout")
  // const [workoutList, setWorkoutList] = useState([])
  // const [isCreateWorkout, setIsCreateWorkout] = useState(false)

  // const addWorkout = newWorkout => {
  //   setWorkoutList(currentWorkouts => [...currentWorkouts, { id: Math.random().toString(), value: newWorkout}])
  //   console.log(workoutList)
  //   setIsCreateWorkout(false)
  // }

  // const cancel = () => {
  //   setIsCreateWorkout(false)
  // }

  // const removeWorkout = workoutId => {
  //   // console.log(workoutId)
  //   setWorkoutList(currentList => {
  //     return currentList.filter((workout) => workout.id !== workoutId)
  //   })
  // }

  return (
    <WorkoutsHome />
    // <View style={styles.container}>
    //   <Header title={"Welcome to Your Workout Manager"} />
    //   <Button title={'Add New Workout'} onPress={() => setIsCreateWorkout(true)} />
    //   <WorkoutForm cancel={cancel} visible={isCreateWorkout} workoutText={workoutText} addWorkout={addWorkout} />
    //   <WorkoutList workoutList={workoutList} delete={removeWorkout} />
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 80,
//   },
// });
