// Square Screen demo without use of reducer
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        // color === 'red' or 'green' or 'blue'
        // change === +15 or -15
        switch (color) {
            case 'red':
                // if(red + change > 255 || red + change < 0){
                //     return;
                // } else{
                //     setRed(red + change);
                // }
                // if else condition above can also be changed to ternary if statement as below.
                (red+change > 255 || red+change < 0)? null:setRed(red + change);
                return;
            case 'green':
                if(green + change > 255 || green + change < 0){
                    return;
                } else{
                    setGreen(green + change);
                }
                return;
            case 'blue':
                if(blue + change > 255 || blue + change < 0){
                    return;
                } else{
                    setBlue(blue + change);
                }
                return;
            default:
                return;
        }
    }

    return (
        <View>
            <ColorCounter 
                onIncrease={()=>{setColor('red', COLOR_INCREMENT)}} 
                onDecrease={()=>{setColor('red', -1*COLOR_INCREMENT)}} 
                color="Red" 
            />
            <ColorCounter 
            onIncrease={()=>{setColor('green', COLOR_INCREMENT)}} 
            onDecrease={()=>{setColor('green', -1*COLOR_INCREMENT)}} 
                color="Green" 
            />
            <ColorCounter 
            onIncrease={()=>{setColor('blue', COLOR_INCREMENT)}} 
            onDecrease={()=>{setColor('blue', -1*COLOR_INCREMENT)}} 
                color="Blue" 
            />
            <View style={{height:100, width:100, backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;