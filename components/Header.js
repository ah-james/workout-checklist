import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/colors';

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15
    },
    headerText: {
        fontSize: 18,
    }
})

export default Header