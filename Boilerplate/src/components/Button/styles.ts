import {StyleSheet} from 'react-native';
import styleGuide from '../../utils/styleGuide';
import {heightRatio, widthRatio} from '../../utils/stylesheet';

const styles = StyleSheet.create({
  buttonContainer: {
    height: heightRatio * 50,
    width: widthRatio * 300,
    marginTop: heightRatio * 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  smallButtonContainer: {
    height: heightRatio * 30,
    width: widthRatio * 100,
  },
  buttonText: {
    fontSize: styleGuide.buttonFontSize,
    color: styleGuide.buttonTextColor,
  },
});

export default styles;
