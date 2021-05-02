import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';


const WorkoutItem = props => {

    return (
        <TouchableNativeFeedback onLongPress={props.delete.bind(this, props.id)} >
            <View style={styles.list} >
                <Text>{props.title}</Text>
            </View>
        </TouchableNativeFeedback>
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

export default WorkoutItem