import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { View, ScrollView, StyleSheet } from 'react-native';

import  { getImagesRequest } from '../../reducer'
import Header from '../ui/Header';
import Post from '../ui/Post';

function Home({ images, getImages }) {
    useEffect(() => {
      getImages();
    }, []);

    return (
        <View>
            <Header title="Test App" />
            <ScrollView>
            <View style={styles.container}>
              { images.map(item => (<Post key={item.id} data={item}/>)) }
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around',
        marginBottom: 250
    }
});

const mapStateToProps = state => ({
    images: state.images,
});

const mapDispatchToProps = {
    getImages: getImagesRequest
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);