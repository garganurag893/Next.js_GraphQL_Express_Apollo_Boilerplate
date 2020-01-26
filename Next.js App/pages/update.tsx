/**
 * Update Profile Page
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import React from 'react';
import Router from 'next/router';
import { toast } from 'react-toastify';
import Footer from '../src/components/Footer';
import { Mutation } from '@apollo/react-components';
import { validateEmail } from '../src/utils/validation';
import UPDATE_USER from '../src/graphql/mutation/updateUser';
import { withAuthSync } from '../src/utils/auth';

interface UpdateState {
  [key: string]: any;
  name: string;
  email: string;
  password: string;
}

class Update extends React.PureComponent<any, UpdateState> {
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

  handleSubmit = async (updateUser, event) => {
    try {
      event.preventDefault();
      const { state, props } = this;
      if (validateEmail(state.email)) {
        await updateUser({
          variables: {
            userId: props.userId,
            updateUser: { ...state },
          },
        });
        toast.success('Profile Updated');
        Router.push('/welcome');
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
        <h1 className="heading">Update Profile</h1>
        <Mutation mutation={UPDATE_USER}>
          {updateUser => (
            <form
              onSubmit={event => this.handleSubmit(updateUser, event)}
              className="update-form">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={state.name}
                onChange={this.handleChange}
                className="update-input-box"
                required
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={state.email}
                onChange={this.handleChange}
                className="update-input-box"
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={state.password}
                onChange={this.handleChange}
                className="update-input-box"
                required
              />
              <input type="submit" value="Submit" className="update-button" />
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
            .update-input-box {
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
            .update-button {
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
            .update-button:hover {
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

export default withAuthSync(Update);
