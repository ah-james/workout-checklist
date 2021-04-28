import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const WorkoutList = props => {
    return (
        <ScrollView>
            {props.workoutList.map((workout) => <View key={workout} style={styles.list}><Text>{workout}</Text></View>)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    list: {
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      marginVertical: 5,
      width: 200,
    }
  });

export default WorkoutList