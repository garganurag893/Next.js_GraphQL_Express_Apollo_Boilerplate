/**
 * Subscription Page
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import React from 'react';
import { useSubscription } from '@apollo/react-hooks';
import { UserCard } from '../src/components/Card';
import USER_ADDED from '../src/graphql/subscription/users';
import { withAuthSync } from '../src/utils/auth';

const Subscription = () => {
  const { data, loading, error } = useSubscription(USER_ADDED);
  let message = 'New User';
  if (loading) message = 'Listening...';
  if (error) message = `Error! ${error.message}`;
  if (data && data.userAdded.length <= 0) message = 'No New User Added';
  return (
    <div className="container">
      <h1 className="heading">{message}</h1>
      {data && data.userAdded && (
        <div className="listContainer">
          <UserCard img="./user.png" user={data.userAdded} />
        </div>
      )}
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
          .listContainer {
            display: flex;
            flex-flow: wrap row;
            justify-content: space-evenly;
            align-items: center;
          }
          .heading {
            color: white;
            text-align: center;
            font-size: 5rem;
            padding: 0rem 0 5rem;
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
};

export default withAuthSync(Subscription);
