import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import Card from './Card'


const WorkoutItem = props => {

    return (
        <Card>
            <TouchableNativeFeedback onLongPress={props.checkDelete.bind(this, props.id)} >
                <View style={styles.list} >
                    <Text>{props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        </Card>
    )
}


const styles = StyleSheet.create({
    list: {
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      marginVertical: 2,
      width: 200,
    }
});

export default WorkoutItem