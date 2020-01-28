import React, {FunctionComponent} from 'react';
import {View, TextInput} from 'react-native';
import styleGuide from '../../utils/styleGuide';
import styles from './styles';

interface InputProps {
  placeholder: string;
  icon: string;
  value: string;
  name: string;
  handleChange: (index: string, value: any) => void;
}

const Input: FunctionComponent<InputProps> = props => {
  return (
    <View style={styles.inputBoxContainer}>
      <View style={styles.inputBoxIconContainer}></View>
      <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.name === 'password'}
        selectionColor={styleGuide.inputSelectionColor}
        value={props.value}
        onChange={value => {
          props.handleChange(props.name, value);
        }}
        style={styles.inputBoxTextContainer}
      />
    </View>
  );
};

export default Input;
