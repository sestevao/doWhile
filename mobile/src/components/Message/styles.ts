import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 36,
  },
  'container:nth-child(2)': {
    paddingLeft: 15,
  },
  message: {
    fontSize: 15,
    lineHeight: 20,
    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR,
    marginBottom: 12,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
  },
  username: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    marginLeft: 16,
  },
});
