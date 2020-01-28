import {StyleSheet} from 'react-native';
import styleGuide from '../../utils/styleGuide';
import {heightRatio, widthRatio} from '../../utils/stylesheet';

const styles = StyleSheet.create({
  heading: {
    fontSize: heightRatio * 35,
    color: styleGuide.textColor,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: heightRatio * 90,
  },
  inputFieldContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightRatio * 20,
  },
});

export default styles;
