import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title="Forest" 
                imageSource={require("../../assets/forest.jpg")}
                imgScore={4}
            />
            <ImageDetail 
                title="Beach" 
                imageSource={require("../../assets/beach.jpg")}
                imgScore={5}
            />
            <ImageDetail 
                title="Mountain" 
                imageSource={require("../../assets/mountain.jpg")}
                imgScore={9}
            />
        </View>
    );

}

const styles = StyleSheet.create({});

export default ImageScreen;