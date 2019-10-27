import React from 'react'
import { Text, StyleSheet, Image, View, TouchableHighlight } from 'react-native'
import { w } from '../../../constants'
import { withNavigation } from "react-navigation";

const Post = ({ data, navigation }) => {
    const { h1, img, sub, container } = styles;

    return (
        <View style={container}>
            <View style={sub}>
                <TouchableHighlight onPress={() => navigation.navigate('Preview', {
                    url: data.urls.full,
                })}>
                    <Image style={img} source={{uri: data.urls.full}} />
                </TouchableHighlight>
            </View>


            <Text style={h1}>Author: {data.user.username}, Name:{data.user.name}</Text>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        width: w / 2.1,
        paddingVertical: 10
    },
    sub: {
        padding: 10,
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 50},
        shadowOpacity: 0.4,
        backgroundColor: 'white'
    },
    h1: {
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'center'
    },
    img: {
        width: w / 2.4,
        height: w * 0.6,
        borderRadius: 10
    },

});

export default withNavigation(Post);