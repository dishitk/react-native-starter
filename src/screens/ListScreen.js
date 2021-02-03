import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: "Deep", age: 25},
        { name: "Harmit", age: 30},
        { name: "Rushit", age: 27},
        { name: "Jeet", age: 23},
        { name: "Pranay", age: 22}
    ];
    return (
        <FlatList
            // horizontal // short hand for horizontal={true}. To make the scorll horizontal
            // showsHorizontalScrollIndicator={false} // to hide the scroll bar on the screen
            keyExtractor={(friend => friend.name)}
            data={friends} 
            renderItem={({item}) => { // element === {item: {name: "Deep"}, index: 0}. {item} gives direct reference to item of each element.
                return (
                    <Text style={styles.textStyle}>
                        {item.name} - Age {item.age}
                    </Text>
                )
            }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 150,
        marginHorizontal: 50
    }
});

export default ListScreen;