import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {ApolloConsumer} from 'react-apollo';
import Snackbar from 'react-native-snackbar';
import Container from '../../components/Container';
import Input from '../../components/Input';
import styles from './styles';
import Button from '../../components/Button';
import LOGIN_USER from '../../graphql/query/login';
import {validateEmail} from '../../utils/validation';
import {setTokenId} from '../../configureClient';

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

  handleSubmit = async (client: any) => {
    try {
      const {state, props} = this;
      if (state.password !== '' && state.email !== '') {
        if (validateEmail(state.email)) {
          const {data} = await client.query({
            query: LOGIN_USER,
            variables: {...state},
          });
          const {token, userId} = data.login;
          setTokenId(token, userId);
          props.navigation.navigate('/welcome');
        } else {
          Snackbar.show({text: 'Invalid Email'});
        }
      } else {
        Snackbar.show({text: 'Required fields not filled'});
      }
    } catch (error) {
      Snackbar.show({text: 'Not Authenticated!'});
    }
  };

  render() {
    const {email, password} = this.state;
    return (
      <ApolloConsumer>
        {client => (
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
            <View style={styles.inputFieldContainer}>
              <Button
                label="Submit"
                size="large"
                shadow
                color="secondary"
                onPress={() => this.handleSubmit(client)}
              />
            </View>
          </Container>
        )}
      </ApolloConsumer>
    );
  }
}

export default Login;
