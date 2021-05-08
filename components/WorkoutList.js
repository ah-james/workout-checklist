import React from 'react'
import WorkoutItem from './WorkoutItem'
import { View, FlatList } from 'react-native';

const WorkoutList = props => {
    return (
        <View>
            <FlatList data={props.workoutList} renderItem={itemData => (
                <WorkoutItem id={itemData.item.id} checkDelete={props.checkDelete} title={itemData.item.value} />
            )} />
        </View>
    )
}

export default WorkoutList