import React from 'react'

const WorkoutItem = props => {

    return (
        <TouchableNativeFeedback onLongPress={props.delete(itemData.item.id)} >
            <View style={styles.list} >
                <Text>{itemData.item.value}</Text>
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