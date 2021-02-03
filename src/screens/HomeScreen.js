import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => { // props are passed by stackNavigator which is used in App.js.
  // {navigation} can be used in place of props. this is called destructuring. It will give access to only navigation object and
  // props.navigation.navigate() can be replaced with just navigation.navigate()
  // console.log(props)
  return (
    <View>
      <Text style={styles.text}>Hello Dishit</Text>
      <Button 
        onPress={()=>props.navigation.navigate('Components')}
        title="Go to Components Demo" 
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <Button 
        onPress={()=>props.navigation.navigate('Images')}
        title="Go to Image Screen Demo" 
      />
      <Button 
        onPress={()=>props.navigation.navigate('Counter')}
        title="Go to Counter Screen Demo" 
      />
      <Button 
        onPress={()=>props.navigation.navigate('Colors')}
        title="Go to Colors Screen Demo" 
      />
      <Button 
        onPress={()=>props.navigation.navigate('Square')}
        title="Go to Square Screen Demo" 
      />
      <Button 
        onPress={()=>props.navigation.navigate('Text')}
        title="Go to Text Screen Demo" 
      />
      <Button 
        onPress={()=>props.navigation.navigate('Box')}
        title="Go to Box Screen Demo" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
