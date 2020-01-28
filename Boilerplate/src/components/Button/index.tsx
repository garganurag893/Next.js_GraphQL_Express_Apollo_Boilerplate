import React, {FunctionComponent} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styleGuide from '../../utils/styleGuide';
import styles from './styles';

interface ButtonProps {
  label: string;
  size: 'small' | 'large';
  color: 'primary' | 'secondary';
  onPress: any;
  shadow?: boolean;
  style?: any;
}

const Button: FunctionComponent<ButtonProps> = props => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        props.size === 'small' ? styles.smallButtonContainer : {},
        props.color === 'primary'
          ? {backgroundColor: styleGuide.primaryColor}
          : {backgroundColor: styleGuide.secondaryColor},
        props.shadow ? styleGuide.bigShadow : {},
        props.style ? props.style : {},
      ]}
      onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
