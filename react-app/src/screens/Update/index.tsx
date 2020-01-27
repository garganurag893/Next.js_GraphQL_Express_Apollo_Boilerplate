/**
 * Update Profile Page
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import React from 'react';
import { toast } from 'react-toastify';
import Footer from '../../components/Footer';
import { Mutation } from '@apollo/react-components';
import { validateEmail } from '../../utils/validation';
import UPDATE_USER from '../../graphql/mutation/updateUser';
import './styles.scss';

interface UpdateState {
  [key: string]: any;
  name: string;
  email: string;
  password: string;
}

class Update extends React.PureComponent<any, UpdateState> {
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

  handleSubmit = async (updateUser: any, event: any) => {
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
        props.history.push('/welcome');
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
      <div className="update-container">
        <h1 className="update-heading">Update Profile</h1>
        <Mutation mutation={UPDATE_USER}>
          {(updateUser: any) => (
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
      </div>
    );
  }
}

export default Update;
