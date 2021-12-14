import React from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';

import {Colors, globalStyles, FontsList} from '../theme/styles';
import PosterImg from '../components/PosterImg';
import {imgsPreview, booksList} from '../api/books';
import BookCard from '../components/BookCard';
import {MainStackScreenProps} from '../navigation/MainStack';

const width = Dimensions.get('window').width;

interface Props extends MainStackScreenProps<'Home'> {}
const Home = ({navigation}: Props) => {
  return (
    <>
      <View style={[globalStyles.globalMargin, styles.container]}>
        <View style={styles.rowHeader}>
          <Text style={styles.logoText}>YoylerBooks</Text>
          <Icon name="search-outline" size={30} color="white" />
        </View>

        <View style={styles.carouselContainer}>
          <Carousel
            data={imgsPreview}
            renderItem={({item}) => {
              return (
                <PosterImg
                  imgURL={item.img}
                  showPlayBoton={true}
                  onPress={() => {
                    navigation.navigate('ReadingBook', {bookId: item.id});
                  }}
                />
              );
            }}
            sliderWidth={width}
            itemWidth={160}
            activeSlideAlignment={'start'}
          />
        </View>
        <Text style={styles.booksSectionText}>Best Seller</Text>
        <FlatList
          data={booksList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <BookCard
              onPress={() =>
                navigation.navigate('BookDetails', {bookId: item.id})
              }
              book={item}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          scrollEnabled
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    paddingTop: 40,
    paddingBottom: 5,
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontFamily: FontsList.GTSectraFine,
  },
  carouselContainer: {
    marginBottom: 50,
  },
  booksSectionText: {
    fontSize: 18,
    fontFamily: FontsList.MontserratSemiBold,
    color: 'white',
    marginBottom: 25,
  },
  separator: {
    marginBottom: 20,
  },
});
