/**
 * Login Component
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import React from 'react';
import Router from 'next/router';
import { toast } from 'react-toastify';
import { ApolloConsumer } from 'react-apollo';
import LOGIN_USER from '../graphql/query/login';
import { validateEmail } from '../utils/validation';
import { setToken } from '../configureClient';
import Cookies from 'js-cookie';

interface LoginState {
  [key: string]: any;
  email: string;
  password: string;
}

class Login extends React.PureComponent<any, LoginState> {
  constructor(props) {
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
      const { state } = this;
      if (validateEmail(state.email)) {
        const { data } = await client.query({
          query: LOGIN_USER,
          variables: { ...state },
        });
        const { token, userId } = data.login;
        setToken(token);
        Cookies.set('userId', userId, { expires: 7 });
        Router.replace('/welcome');
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
            <p onClick={() => Router.push('/signup')}>
              New user ? <b>Sign Up</b>
            </p>
            <style jsx>
              {`
                form {
                  display: flex;
                  flex-flow: column wrap;
                  justify-content: center;
                  align-items: center;
                  border-left: 1px solid white;
                  padding: 2rem;
                }
                p {
                  color: white;
                  cursor: pointer;
                }
                .login-input-box {
                  background-color: white;
                  border-radius: 14px 0px 14px 1px;
                  -moz-border-radius: 14px 0px 14px 1px;
                  -webkit-border-radius: 14px 0px 14px 1px;
                  border: 0px solid #000000;
                  box-shadow: 0 20px 30px -16px rgba(9, 9, 16, 0.2);
                  border: 0;
                  width: 15rem;
                  padding: 0.5rem;
                  height: 2rem;
                  margin-bottom: 2rem;
                  font-family: Candara;
                }
                .login-button {
                  background-color: white;
                  border-radius: 14px 0px 14px 1px;
                  -moz-border-radius: 14px 0px 14px 1px;
                  -webkit-border-radius: 14px 0px 14px 1px;
                  border: 0px solid #000000;
                  box-shadow: 0 20px 30px -16px rgba(9, 9, 16, 0.2);
                  width: 15rem;
                  font-size: 0.9rem;
                  padding: 0.5rem;
                  height: 3rem;
                  margin: 2rem;
                  font-family: Candara;
                  transition: transform 0.2s;
                  cursor: pointer;
                }
                .login-button:hover {
                  transform: scale(1.1);
                  background: #355c7d;
                  background: -webkit-linear-gradient(
                    to right,
                    #c06c84,
                    #6c5b7b,
                    #355c7d
                  );
                  background: linear-gradient(
                    to right,
                    #c06c84,
                    #6c5b7b,
                    #355c7d
                  );
                  color: white;
                }
                @media only screen and (max-width: 740px) {
                  form {
                    border-left: none;
                    border-top: 1px solid white;
                  }
                }
                input:focus {
                  outline: none;
                }
              `}
            </style>
          </form>
        )}
      </ApolloConsumer>
    );
  }
}

export default Login;
