import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

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

const Home = () => {
  const [addTodo, { data }] = useMutation(GET_USERS);
  return (
    <div className="container">
      <h1 className="heading">Welcome</h1>
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

export default Home;
