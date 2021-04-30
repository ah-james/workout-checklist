import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const WorkoutList = props => {
    return (
        <ScrollView>
            {props.workoutList.map((workout) => 
            <TouchableOpacity onLongPress={props.delete}>
                <View key={workout} style={styles.list}>
                    <Text>{workout}</Text>
                </View>
            </TouchableOpacity>)}
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