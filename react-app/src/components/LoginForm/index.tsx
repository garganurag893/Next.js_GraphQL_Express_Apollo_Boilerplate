/**
 * Login Form Component
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import React from 'react';
import { toast } from 'react-toastify';
import { ApolloConsumer } from 'react-apollo';
import LOGIN_USER from '../../graphql/query/login';
import { validateEmail } from '../../utils/validation';
import { setToken } from '../../configureClient';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import './styles.scss';

interface LoginFormState {
  [key: string]: any;
  email: string;
  password: string;
}

class LoginForm extends React.PureComponent<any, LoginFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event: any, client: any) => {
    try {
      event.preventDefault();
      const { state, props } = this;
      if (validateEmail(state.email)) {
        const { data } = await client.query({
          query: LOGIN_USER,
          variables: { ...state },
        });
        const { token, userId } = data.login;
        setToken(token);
        Cookies.set('userId', userId, { expires: 7 });
        props.history.replace('/welcome');
      } else {
        toast.error('Invalid Email');
      }
    } catch (error) {
      toast.error('Not Authenticated');
    }
  };

  render() {
    const { state } = this;
    return (
      <ApolloConsumer>
        {client => (
          <form
            onSubmit={e => this.handleSubmit(e, client)}
            className="login-form">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={state.email}
              onChange={this.handleChange}
              className="login-input-box"
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={state.password}
              onChange={this.handleChange}
              className="login-input-box"
              required
            />
            <input type="submit" value="Submit" className="login-button" />
            <Link to="/signup" className="signup-link">
              <p>
                New user ? <b>Sign Up</b>
              </p>
            </Link>
          </form>
        )}
      </ApolloConsumer>
    );
  }
}

export default LoginForm;
