import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, ScrollView, StyleSheet } from 'react-native';
import {withNavigation} from "react-navigation";

import Header from '../ui/Header';
import Post from '../ui/Post';

const url = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

function Home() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
      const { data } = await axios.get(url);
      setData(data);
    };

    useEffect(() => {
      fetchData()
        .then(r => r)
        .catch(e => console.log(e.message));
    }, []);

    return (
        <View>
            <Header title="Test App" />
            <ScrollView>
            <View style={styles.container}>
              { data.map(item => (<Post key={item.id} data={item}/>)) }
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

export default withNavigation(Home);