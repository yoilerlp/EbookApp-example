import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackComponent from './src/navigation/MainStack';
const App = () => {
  return (
    <NavigationContainer>
      <MainStackComponent />
    </NavigationContainer>
  );
};

export default App;
