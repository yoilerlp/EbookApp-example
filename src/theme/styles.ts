import {StyleSheet} from 'react-native';

export enum FontsList {
  'GTSectraFine' = 'GTSectraFine',
  'MontserratExtraBold' = 'Montserrat-ExtraBold',
  'MontserratMedium' = 'Montserrat-Medium',
  'MontserratRegular' = 'Montserrat-Regular',
  'MontserratSemiBold' = 'Montserrat-SemiBold',
  'GilroyExtraBold' = 'Gilroy-ExtraBold',
  'GilroyLight' = 'Gilroy-Light',
}

export const Colors = {
  bgColor: '#100B20',
  title: '#FFFFFF',
  subTitle: '#B7B6BC',
  raitingPersons: '#87858F',
  secondary: '#FF9671',
  star: '#FFDD4F',
  raitingNumber: '',
};

export const globalStyles = StyleSheet.create({
  globalMargin: {
    paddingHorizontal: 30,
  },
});
