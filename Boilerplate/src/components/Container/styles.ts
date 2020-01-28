import {StyleSheet} from 'react-native';
import styleGuide from '../../utils/styleGuide';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: styleGuide.primaryColor,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  safeAreaView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export default styles;
