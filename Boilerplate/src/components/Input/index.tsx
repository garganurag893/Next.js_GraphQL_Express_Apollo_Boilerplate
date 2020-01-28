import React, {FunctionComponent} from 'react';
import {View, TextInput} from 'react-native';
import styleGuide from '../../utils/styleGuide';
import styles from './styles';

interface InputProps {
  placeholder: string;
  icon: string;
  value: string;
  name: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  handleChange: (index: string, value: any) => void;
}

const Input: FunctionComponent<InputProps> = props => {
  return (
    <View style={styles.inputBoxContainer}>
      <View style={styles.inputBoxIconContainer}></View>
      <TextInput
        placeholder={props.placeholder}
        autoCapitalize={props.autoCapitalize ? props.autoCapitalize : 'none'}
        secureTextEntry={props.name === 'password'}
        autoCorrect={false}
        selectionColor={styleGuide.inputSelectionColor}
        value={props.value}
        onChangeText={text => {
          props.handleChange(props.name, text);
        }}
        style={styles.inputBoxTextContainer}
      />
    </View>
  );
};

export default Input;
