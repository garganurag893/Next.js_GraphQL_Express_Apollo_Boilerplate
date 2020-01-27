/**
 * SignUp Page
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import React from 'react';
import { toast } from 'react-toastify';
import Footer from '../../components/Footer';
import Cookies from 'js-cookie';
import { Mutation } from '@apollo/react-components';
import CREATE_USER from '../../graphql/mutation/createUser';
import { setToken } from '../../configureClient';
import { validateEmail } from '../../utils/validation';
import './styles.scss';

interface SignUpState {
  [key: string]: any;
  name: string;
  email: string;
  password: string;
}

class SignUp extends React.PureComponent<any, SignUpState> {
  constructor(props: any) {
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

  handleSubmit = async (createUser: any, event: any) => {
    try {
      event.preventDefault();
      const { state, props } = this;
      if (validateEmail(state.email)) {
        const data = await createUser({
          variables: {
            userInput: { ...state },
          },
        });
        const { token, userId } = data.createUser;
        setToken(token);
        Cookies.set('userId', userId, { expires: 7 });
        props.history.replace('/welcome');
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
      <div className="signup-container">
        <h1 className="signup-heading">Sign Up</h1>
        <Mutation mutation={CREATE_USER}>
          {(createUser: any) => (
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
      </div>
    );
  }
}

export default SignUp;
