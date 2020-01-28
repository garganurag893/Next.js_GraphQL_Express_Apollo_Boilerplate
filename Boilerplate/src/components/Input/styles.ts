import {StyleSheet} from 'react-native';
import styleGuide from '../../utils/styleGuide';
import {heightRatio, widthRatio} from '../../utils/stylesheet';

const styles = StyleSheet.create({
  inputBoxContainer: {
    height: heightRatio * 50,
    width: widthRatio * 300,
    marginTop: heightRatio * 20,
    borderRadius: 5,
    backgroundColor: styleGuide.inputBoxColor,
    flexDirection: 'row',
    ...styleGuide.bigShadow,
  },
  inputBoxIconContainer: {
    width: widthRatio * 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBoxTextContainer: {
    flex: 1,
    fontSize: styleGuide.inputFontSize,
  },
});

export default styles;
