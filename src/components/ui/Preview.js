import React from 'react';
import { Button, StyleSheet, Image, View, TouchableHighlight, } from 'react-native';
import { withNavigation } from 'react-navigation';
import { w, h } from '../../../constants';


const Preview = ({ navigation }) => {
    const { img, container,  } = styles;
    const uri = navigation.getParam('url');


    return (
        <View style={container}>
            <Image style={img} source={{ uri }} />
            <TouchableHighlight onPress={() => navigation.navigate('Home')}>
                <Button title="Back" disabled />
            </TouchableHighlight>

        </View>

    )
};

const styles = StyleSheet.create({
    container: {

    },
    img: {

        height: h - 60,
        width: w,

    },

});

export default withNavigation(Preview);