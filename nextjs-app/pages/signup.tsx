/**
 * SignUp Page
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import React from 'react';
import Router from 'next/router';
import { toast } from 'react-toastify';
import Footer from '../src/components/Footer';
import Cookies from 'js-cookie';
import { Mutation } from '@apollo/react-components';
import CREATE_USER from '../src/graphql/mutation/createUser';
import { setToken } from '../src/configureClient';
import { validateEmail } from '../src/utils/validation';

interface SignUpState {
  [key: string]: any;
  name: string;
  email: string;
  password: string;
}

class SignUp extends React.PureComponent<any, SignUpState> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (createUser, event) => {
    try {
      event.preventDefault();
      const { state } = this;
      if (validateEmail(state.email)) {
        const data = await createUser({
          variables: {
            userInput: { ...state },
          },
        });
        const { token, userId } = data.createUser;
        setToken(token);
        Cookies.set('userId', userId, { expires: 7 });
        Router.replace('/welcome');
      } else {
        toast.error('Invalid Email');
      }
    } catch (error) {
      toast.error('Check your connection');
    }
  };
  render() {
    const { state } = this;
    return (
      <div className="container">
        <h1 className="heading">Sign Up</h1>
        <Mutation mutation={CREATE_USER}>
          {(createUser, { loading, error }) => (
            <form
              onSubmit={event => this.handleSubmit(createUser, event)}
              className="signup-form">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={state.name}
                onChange={this.handleChange}
                className="signup-input-box"
                required
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={state.email}
                onChange={this.handleChange}
                className="signup-input-box"
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={state.password}
                onChange={this.handleChange}
                className="signup-input-box"
                required
              />
              <input type="submit" value="Submit" className="signup-button" />
            </form>
          )}
        </Mutation>
        <Footer />
        <style jsx>
          {`
            .container {
              height: 100%;
              min-height: 100vh;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-flow: column wrap;
            }
            .heading {
              color: white;
              text-align: center;
              font-size: 5rem;
              padding: 5rem 0rem;
            }
            form {
              display: flex;
              flex-flow: column wrap;
              justify-content: center;
              align-items: center;
            }
            .signup-input-box {
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
            .signup-button {
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
            .signup-button:hover {
              transform: scale(1.1);
              background: #355c7d;
              background: -webkit-linear-gradient(
                to right,
                #c06c84,
                #6c5b7b,
                #355c7d
              );
              background: linear-gradient(to right, #c06c84, #6c5b7b, #355c7d);
              color: white;
            }
            input:focus {
              outline: none;
            }
          `}
        </style>
        <style jsx global>
          {`
            h1,
            h2 {
              margin: 0;
              font-family: Candara;
            }
            body {
              margin: 0;
              padding: 0;
              height: 100%;
              min-height: 100vh;
              font-family: Candara;
              background: #355c7d;
              background: -webkit-linear-gradient(
                to right,
                #c06c84,
                #6c5b7b,
                #355c7d
              );
              background: linear-gradient(to right, #c06c84, #6c5b7b, #355c7d);
            }
          `}
        </style>
      </div>
    );
  }
}

export default SignUp;
