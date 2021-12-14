import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, FontsList} from '../theme/styles';
import {MainStackScreenProps} from '../navigation/MainStack';
import PosterImg from '../components/PosterImg';
import {useBook} from '../hooks/useBook';
import BookDetails from '../components/BookDetails';
import {imgsAlsoLike} from '../api/books';

interface Props extends MainStackScreenProps<'BookDetails'> {}

const BookDetailsScreen = ({route, navigation}: Props) => {
  const book = useBook(route.params.bookId);
  return (
    <View style={styles.container}>
      <View style={styles.rowHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="close" color="white" size={33} />
        </TouchableOpacity>
        <Icon name="cart-outline" color="white" size={33} />
      </View>
      <View style={styles.imgContainer}>
        <PosterImg
          width={160}
          height={240}
          imgURL={book.poster}
          showPlayBoton={false}
        />
      </View>
      <BookDetails book={book} center />
      <View style={styles.previewContainer}>
        <View style={[styles.btnPricePreview, styles.priceBtn]}>
          <Text style={styles.priceText}>{book.price}€</Text>
        </View>
        <View style={[styles.btnPricePreview, styles.previewBtn]}>
          <Text style={styles.previewText}>Free preview</Text>
        </View>
      </View>
      <Text style={styles.couldLikeText}>You can also like</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={imgsAlsoLike}
          renderItem={item => (
            <PosterImg
              imgURL={item.item}
              showPlayBoton={false}
              width={70}
              height={110}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* <Text style={{color: 'white'}}>
        {' '}
        {JSON.stringify({book, route}, null, 5)}{' '}
      </Text> */}
    </View>
  );
};

export default BookDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    // paddingBottom: 30,
  },
  rowHeader: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  previewContainer: {
    flexDirection: 'row',
    marginHorizontal: 35,
    width: 300,
    height: 48,
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  btnPricePreview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceBtn: {},
  previewBtn: {
    backgroundColor: '#EF8262',
  },
  priceText: {
    fontFamily: FontsList.MontserratExtraBold,
    fontSize: 18,
    color: 'black',
  },
  previewText: {
    fontFamily: FontsList.GilroyExtraBold,
    fontSize: 16,
    lineHeight: 16,
    color: 'white',
  },
  couldLikeText: {
    fontFamily: FontsList.MontserratSemiBold,
    color: 'white',
    fontSize: 14,
    marginLeft: 30,
    marginTop: 40,
    marginBottom: 20,
  },
  listContainer: {marginLeft: 30},
  separator: {marginRight: 10},
});
