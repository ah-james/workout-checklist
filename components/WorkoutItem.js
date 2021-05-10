import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback, Button } from 'react-native';
import Card from './Card'
import Colors from '../constants/colors'

const WorkoutItem = props => {

    return (
        <Card>
            <TouchableNativeFeedback onLongPress={props.checkDelete.bind(this, props.id)} >
                <View style={styles.list} >
                    <Text style={styles.text}>{props.title}</Text>
                    <Button title="Begin" style={styles.button} color={Colors.primary} onPress={() => props.chooseWorkout(props.id)} />
                </View>
            </TouchableNativeFeedback>
        </Card>
    )
}

const styles = StyleSheet.create({
    list: {
      padding: 5,
      width: 120,
      alignItems: 'center',
    }, 
    text: {
        fontSize: 20,
    },
});

export default WorkoutItem