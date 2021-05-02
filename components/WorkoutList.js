import React from 'react'
import WorkoutItem from './WorkoutItem'
import { View, FlatList } from 'react-native';

const WorkoutList = props => {
    return (
        <View>
            <FlatList data={props.workoutList} renderItem={itemData => (
                <WorkoutItem id={itemData.item.id} delete={props.delete} title={itemData.item.value} />
            )} />
        </View>
    )
}

export default WorkoutList