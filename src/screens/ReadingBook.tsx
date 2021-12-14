import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {MainStackScreenProps} from '../navigation/MainStack';
import {Colors, FontsList} from '../theme/styles';
import PosterImg from '../components/PosterImg';
import BookDetails from '../components/BookDetails';
import {useBook} from '../hooks/useBook';
const {width, height} = Dimensions.get('window');

interface Props extends MainStackScreenProps<'ReadingBook'> {}
const ReadingBook = ({route}: Props) => {
  const book = useBook(route.params.bookId);
  return (
    <View style={styles.container}>
      <View>
        <PosterImg
          showPlayBoton
          imgURL={book.poster}
          borderTop={false}
          btnPlayPosition="center"
          width={width}
          height={height * 0.65}
        />
      </View>

      <View style={styles.contentContainer}>
        <BookDetails book={book} />
        <View style={styles.progresBar}>
          <View style={styles.currentProgres}>
            <View style={styles.currentPosition} />
          </View>
        </View>
        <View style={styles.rowProgres}>
          <Text style={styles.progresStart}>00:00</Text>
          <Text style={[styles.progresStart, styles.progresEnd]}>32:15</Text>
        </View>
      </View>
    </View>
  );
};

export default ReadingBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
  },
  imgContainer: {},
  contentContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 40,
  },
  progresBar: {
    width: '100%',
    height: 5,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  currentProgres: {
    backgroundColor: Colors.secondary,
    borderRadius: 30,
    position: 'absolute',
    top: 0,
    left: 0,
    height: 5,
    width: '70%',
  },
  currentPosition: {
    backgroundColor: Colors.secondary,
    borderRadius: 30,
    position: 'absolute',
    top: '-50%',
    left: '97%',
    height: 10,
    width: 10,
    alignSelf: 'center',
  },
  rowProgres: {flexDirection: 'row', marginTop: 8},
  progresStart: {
    color: 'white',
    fontFamily: FontsList.GilroyExtraBold,
    fontSize: 14,
  },
  progresEnd: {
    position: 'absolute',
    left: '65%',
  },
});
