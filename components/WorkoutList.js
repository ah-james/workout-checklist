import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableNativeFeedback } from 'react-native';

const WorkoutList = props => {
    return (
        <View>
            <FlatList data={props.workoutList} renderItem={itemData => (
                <WorkoutItem delete={props.delete} title={itemData.item.value} />
            )} />
        </View>
    )
}

export default WorkoutList