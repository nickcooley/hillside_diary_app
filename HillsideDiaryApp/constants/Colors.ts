import { Theme } from "@react-navigation/native";

const primaryColorLight = '#2f95dc';
const primaryColorDark = '#6ea5ff';
const tintColorDark = '#fff';

export default {
  light: {
    dark: false,
    colors: {
      primary: primaryColorLight,
      background: '#fff',
      card: '#fff',
      text: '#000',
      border: primaryColorLight,
      notification: primaryColorLight,
    }
  } as Theme,
  dark: {
    dark: true,
    colors: {
      primary: primaryColorDark,
      background: '#000',
      card: '#000',
      text: '#fff',
      border: primaryColorDark,
      notification: primaryColorDark,
    }
  } as Theme,
};
