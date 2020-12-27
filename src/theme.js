import { DefaultTheme, configureFonts } from 'react-native-paper';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Quicksand-Bold',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Quicksand-Regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Quicksand-Medium',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Quicksand-Light',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Quicksand-Bold',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Quicksand-Regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Quicksand-Medium',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Quicksand-Light',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'Quicksand-Bold',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Quicksand-Regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Quicksand-Medium',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Quicksand-Light',
      fontWeight: 'normal',
    },
  },
};

const appTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary: "#ffffff",
    accent: "#00ff69",
    background: "#ffffff",
  },
  fonts: configureFonts(fontConfig)
}

export default appTheme;