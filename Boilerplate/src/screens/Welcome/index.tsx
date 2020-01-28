import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import Container from '../../components/Container';
import Input from '../../components/Input';
import styles from './styles';

interface WelcomeState {
  [key: string]: any;
  email: string;
  password: string;
}

class Welcome extends PureComponent<any, WelcomeState> {
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
    const {email, password} = this.state;
    return (
      <Container>
        <Text style={styles.heading}>Welcome</Text>
        <Input
          placeholder="Email"
          name="email"
          handleChange={this.handleChange}
          value={email}
          icon="email"
        />
        <Input
          placeholder="Password"
          name="Password"
          handleChange={this.handleChange}
          value={password}
          icon="password"
        />
      </Container>
    );
  }
}

export default Welcome;
