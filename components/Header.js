import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
        height: 90,
        paddingTop: 40,
        backgroundColor: '#bfbfbf',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 18,
    }
})

export default Header