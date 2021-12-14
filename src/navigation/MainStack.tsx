import React from 'react';
import {RouteProp} from '@react-navigation/core';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import Home from '../screens/Home';
import ReadingBook from '../screens/ReadingBook';
import BookDetailsScreen from '../screens/BookDetailsScreen';

type MainStackScreensList = {
  Home: undefined;
  BookDetails: {bookId: string};
  ReadingBook: {bookId: string};
};

// typing navigation and route objects for all MainStackScreend
export type MainStackNavigationProp<
  RouteName extends keyof MainStackScreensList = 'Home',
> = StackNavigationProp<MainStackScreensList, RouteName>;

export type MainStackRouteProp<
  RouteName extends keyof MainStackScreensList = 'Home',
> = RouteProp<MainStackScreensList, RouteName>;

// generic props for screens (navigation and route )
export interface MainStackScreenProps<
  RouteName extends keyof MainStackScreensList = 'Home',
> {
  navigation: MainStackNavigationProp<RouteName>;
  route: MainStackRouteProp<RouteName>;
}

const MainStack = createStackNavigator<MainStackScreensList>();

const MainStackComponent = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="BookDetails" component={BookDetailsScreen} />
      <MainStack.Screen name="ReadingBook" component={ReadingBook} />
    </MainStack.Navigator>
  );
};

export default MainStackComponent;
