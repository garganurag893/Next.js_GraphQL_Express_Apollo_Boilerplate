/**
 * Subscription Page
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import React from "react";
import { useSubscription } from "@apollo/react-hooks";
import { UserCard } from "../../components/Card";
import USER_ADDED from "../../graphql/subscription/users";
import "./styles.scss";

const Subscription = () => {
  const { data, loading, error } = useSubscription(USER_ADDED);
  let message = "New User";
  if (loading) message = "Listening...";
  if (error) message = `Error! ${error.message}`;
  if (data && data.userAdded.length <= 0) message = "No New User Added";
  return (
    <div className="subscription-container">
      <h1 className="subscription-heading">{message}</h1>
      {data && data.userAdded && (
        <div className="subscription-listContainer">
          <UserCard img="./user.png" user={data.userAdded} />
        </div>
      )}
    </div>
  );
};

export default Subscription;
