import {StyleSheet} from 'react-native';
import styleGuide from '../../utils/styleGuide';
import {heightRatio, widthRatio} from '../../utils/stylesheet';

const styles = StyleSheet.create({
  cardContainer: {
    height: heightRatio * 200,
    width: widthRatio * 300,
    marginTop: heightRatio * 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  smallCardContainer: {
    height: heightRatio * 50,
    width: widthRatio * 100,
  },
  largeCardContainer: {
    height: heightRatio * 300,
    width: widthRatio * 300,
  },
  cardText: {
    fontSize: styleGuide.buttonFontSize,
    color: styleGuide.buttonTextColor,
  },
});

export default styles;
