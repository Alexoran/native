import React from 'react';
import {View } from 'react-native';
import { Provider } from "react-redux";
import configureStore from "./src/configStore";

import AppNavigator from './src/router';

export default function App() {
    const store = configureStore();
  return (
      <Provider store={store}>
          <View>
              <AppNavigator/>
          </View>
      </Provider>
  );
}

