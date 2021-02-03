import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number}
    // action(depends upon us how we want to pass the object) === { colorToChange: 'red' or 'green' or 'blue, amount: 15 or -15}
    // as per community convention action object is written as action === { type: 'change_red', payload: 15 or -15}
    // type describes the exact change that needs to be made. payload is some data that is critical to the change operation.
    switch(action.type) {
        case 'change_red':
            // never directly change the state variable. for eg. state.red = state.red + action.amount
            return (state.red + action.payload > 255 || state.red + action.payload < 0) 
                    ? state 
                    : {...state, red: state.red + action.payload}
            // return {...state, red: state.red + action.amount} // {...state, red:state.red+amount.action} creates a new object, copies the state object and then modifies the red property in that new object. So we did not change the state object technically.
        case 'change_green':
            return (state.green + action.payload > 255 || state.green + action.payload < 0) 
                    ? state 
                    : {...state, green: state.green + action.payload}
            // return {...state, green: state.green + action.amount}
        case 'change_blue':
            return (state.blue + action.payload > 255 || state.blue + action.payload < 0) 
                    ? state 
                    : {...state, blue: state.blue + action.payload}
            // return {...state, blue: state.blue + action.amount}
        default:
            return state;
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT})} 
                onDecrease={() => dispatch({ type: 'change_red', payload: -1*COLOR_INCREMENT})} 
                color="Red" 
            />
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT})} 
                onDecrease={() => dispatch({ type: 'change_green', payload: -1*COLOR_INCREMENT})}
                color="Green" 
            />
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT})} 
                onDecrease={() => dispatch({ type: 'change_blue', payload: -1*COLOR_INCREMENT})}
                color="Blue" 
            />
            <View style={{height:100, width:100, backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;