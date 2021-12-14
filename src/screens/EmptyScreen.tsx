import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MainStackScreenProps} from '../navigation/MainStack';

/*
import {
  MainStackNavigationProp,
  MainStackRouteProp,
} from '../navigation/MainStack';

interface Props {
  navigation: MainStackNavigationProp<'Home'>;
  route: MainStackRouteProp<'Home'>;
}
*/

const EmptyScreen = ({navigation, route}: MainStackScreenProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'black',
          fontSize: 40,
          fontFamily: 'GTSectraFine',
        }}>
        Harry Potter and the Goblet of Fire
      </Text>
      <Text> EmptyScreen - {route.name}</Text>
      <Text> Params route - {JSON.stringify(route.params, null, 3)}</Text>
      <Icon name="star" size={20} color="blue" />
      <Button
        title="Go to ReadingBook"
        onPress={() =>
          navigation.navigate('ReadingBook', {bookId: '12Reading'})
        }
      />
      <Button
        title="Go to BookDetails"
        onPress={() => navigation.navigate('BookDetails', {bookId: '12'})}
      />
    </View>
  );
};

export default EmptyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
