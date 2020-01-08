import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

interface User {
  id: string;
  name: string;
  email: string;
}

const GET_USERS = gql`
  {
    users {
      id
      name
      email
    }
  }
`;

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data.users.map((user: User) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </div>
  );
};

export default Users;
