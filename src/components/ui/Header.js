import React from 'react'
import {View, Text, StyleSheet } from 'react-native'

const Header = ({title}) => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1260fe',
        height: 85,
        justifyContent: 'center',
        paddingLeft: 22,
        paddingTop: 51,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 28,
        color: 'white',
    }
});

export default Header;