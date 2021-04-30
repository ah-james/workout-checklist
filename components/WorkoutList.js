import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableNativeFeedback } from 'react-native';

const WorkoutList = props => {
    return (
        <FlatList data={props.workoutList} renderItem={itemData => (
            <TouchableNativeFeedback >
                {/* onLongPress={props.delete(itemData.item)} */}
                <View style={styles.list}>
                    <Text>{itemData.item.value}</Text>
                </View>
            </TouchableNativeFeedback>
        )} />
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