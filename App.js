import React, { useEffect, useState } from 'react';
import {View } from 'react-native';

import AppNavigator from './src/router';

export default function App() {
  return (
    <View>
      <AppNavigator/>
    </View>
  );
}

