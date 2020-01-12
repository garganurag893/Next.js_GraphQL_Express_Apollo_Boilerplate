import React from "react";
import { useQuery } from "@apollo/react-hooks";
import List from "../src/components/List";
import GET_USERS from "../src/graphql/query/user";

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  let message = "Users";
  if (loading) message = "Loading...";
  if (error) message = `Error! ${error.message}`;
  if (data && data.users.length <= 0) message = "No Users";
  return (
    <div className="container">
      <h1 className="heading">{message}</h1>
      {data && data.users.length > 0 && (
        <div className="listContainer">
          <List img="./user.png" data={data.users} />
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

export default Users;
