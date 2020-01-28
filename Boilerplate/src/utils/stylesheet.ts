// It determines screen ratio for different screen sizes for proper display of contents
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const heightRatio = height / 667;
const widthRatio = width / 375;

export {heightRatio, widthRatio};
