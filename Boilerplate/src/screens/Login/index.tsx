import React, {PureComponent} from 'react';
import Container from '../../components/Container';
import {View, Text} from 'react-native';
import styles from './styles';

interface LoginState {
  [key: string]: any;
  email: string;
  password: string;
}

class Login extends PureComponent<any, LoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (index: string, value: string) => {
    this.setState({[index]: value});
  };

  render() {
    return (
      <Container>
        <Text style={styles.heading}>Welcome</Text>
      </Container>
    );
  }
}

export default Login;
