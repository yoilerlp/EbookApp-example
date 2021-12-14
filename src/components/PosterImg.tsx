import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageColors from 'react-native-image-colors';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width: windowsWidth} = Dimensions.get('window');

interface Props {
  width?: number;
  height?: number;
  imgURL: string;
  bottomRadius?: number;
  showPlayBoton: boolean;
  btnPlayPosition?: 'rigth' | 'center';
  borderTop?: boolean;
  onPress?: () => void;
}
const PosterImg = ({
  imgURL,
  width = 150,
  height = 234,
  showPlayBoton,
  btnPlayPosition = 'rigth',
  borderTop = true,
  onPress,
}: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [colors, setColors] = useState<string[]>(['red', 'blue']);

  const getColorsAsyn = async () => {
    const result = await ImageColors.getColors(imgURL);
    switch (result.platform) {
      case 'android':
        // const average = result.average!;
        const vibrant = result.vibrant!;
        const dominant = result.dominant!;
        setColors([vibrant, dominant]);
        break;
      default:
        throw new Error('Unexpected platform key');
    }
  };

  // React.useEffect(() => {
  //   //getColorsAsyn();
  // }, [imgURL]);
  return (
    <View style={[{width, height}, styles.container]}>
      {isLoading && (
        <View style={styles.loader}>
          <ActivityIndicator size={50} />
        </View>
      )}
      <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
        <Image
          resizeMode={btnPlayPosition === 'center' ? 'stretch' : 'cover'}
          style={[
            {
              width,
              height: height - 20,
              ...styles.img,
            },
            !borderTop ? styles.noBorderTop : styles.img,
          ]}
          source={{uri: imgURL}}
          onLoadEnd={async () => {
            if (showPlayBoton) {
              await getColorsAsyn();
            }
            setIsLoading(false);
          }}
        />
      </TouchableOpacity>
      {showPlayBoton && !isLoading ? (
        <View
          style={[
            btnPlayPosition === 'rigth' ? styles.rigth : styles.center,
            {width: width * 0.2, height: width * 0.2},
            styles.playBtnContainer,
          ]}>
          <LinearGradient colors={colors} style={styles.linearGradient}>
            <Icon name="play" size={10} color="white" />
          </LinearGradient>
        </View>
      ) : null}
    </View>
  );
};

export default PosterImg;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  img: {
    borderRadius: 15,
  },
  noBorderTop: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  playBtnContainer: {
    position: 'absolute',
    // width: width * 0.2,
    // height: width * 0.2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    // opacity: 0.5,
  },
  rigth: {
    bottom: 25,
    right: 10,
  },
  center: {
    bottom: 0,
    left: windowsWidth * 0.4,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
