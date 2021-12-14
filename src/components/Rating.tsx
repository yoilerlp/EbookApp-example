import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {FontsList, Colors} from '../theme/styles';

interface Props {
  averageRating: number;
  ratingPeople: number;
}

const Rating = ({averageRating, ratingPeople}: Props) => {
  return (
    <View style={styles.row}>
      <Icon name="star" size={16} color={Colors.star} />
      <Text style={styles.ratingAvarageText}>{averageRating}</Text>
      <Text style={styles.ratingPoepleText}>({ratingPeople})</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingAvarageText: {
    fontSize: 16,
    fontFamily: FontsList.MontserratMedium,
    color: 'white',
    marginHorizontal: 5,
  },
  ratingPoepleText: {
    fontFamily: FontsList.MontserratRegular,
    fontSize: 14,
    color: Colors.subTitle,
  },
});
