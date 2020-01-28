import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import Container from '../../components/Container';
import Input from '../../components/Input';
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

  handleChange = (index: string, value: any) => {
    this.setState({[index]: value});
  };

  render() {
    const {email, password} = this.state;
    return (
      <Container>
        <Text style={styles.heading}>Welcome</Text>
        <View style={styles.inputFieldContainer}>
          <Input
            placeholder="Email"
            name="email"
            handleChange={this.handleChange}
            value={email}
            icon="email"
          />
          <Input
            placeholder="Password"
            name="password"
            handleChange={this.handleChange}
            value={password}
            icon="password"
          />
        </View>
      </Container>
    );
  }
}

export default Login;
