import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const greeting = "Hi there!"
    const greet = <Text>Hello</Text>;
    const name = "Dishit"
    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen.</Text>
            <Text style={styles.greetingStyle}>{greeting}</Text>
            {greet}
            <Text style={{fontSize: 30}}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle : {
        fontSize: 30
    },
    greetingStyle : {
        fontSize: 50
    }
});

export default ComponentsScreen;