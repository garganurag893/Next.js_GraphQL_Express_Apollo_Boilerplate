/**
 * User List Page
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import React from "react";
import List from "../../components/List";
import { useQuery } from "@apollo/react-hooks";
import GET_USERS from "../../graphql/query/user";
import "./styles.scss";

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  let message = "Users";
  if (loading) message = "Loading...";
  if (error) message = `Error! ${error}`;
  if (data && data.users.length <= 0) message = "No Users";
  return (
    <div className="users-container">
      <h1 className="users-heading">{message}</h1>
      {data && data.users.length > 0 && (
        <div className="users-listContainer">
          <List img="./user.png" data={data.users} />
        </div>
      )}
    </div>
  );
};

export default Users;
