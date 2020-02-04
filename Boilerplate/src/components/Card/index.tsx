import React, {FunctionComponent, PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import styleGuide from '../../utils/styleGuide';
import styles from './styles';

interface CardProps {
  size: 'small' | 'medium' | 'large';
  color: string;
  label?: string;
  onPress?: any;
  shadow?: boolean;
  style?: any;
}

const Card: FunctionComponent<PropsWithChildren<CardProps>> = props => {
  return (
    <View
      style={[
        styles.cardContainer,
        props.size === 'small' ? styles.smallCardContainer : {},
        props.size === 'large' ? styles.largeCardContainer : {},
        {backgroundColor: props.color},
        props.shadow ? styleGuide.bigShadow : {},
        props.style ? props.style : {},
      ]}>
      {props.label ? (
        <Text style={styles.cardText}>{props.label}</Text>
      ) : (
        <>{props.children}</>
      )}
    </View>
  );
};

export default Card;
