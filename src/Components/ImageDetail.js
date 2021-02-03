import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ImageDetail = ({title,imageSource, imgScore}) => {
    // {title} can also be replaced by (props) if we want to get the whole object
    return (
        <View>
            <Image source={imageSource}/>
            <Text>{title}</Text>
            <Text>Image Score - {imgScore}</Text>
        </View>
    );

}

const styles = StyleSheet.create({});

export default ImageDetail;
