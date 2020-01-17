import React from 'react';
import Card from '../src/components/Card';

const Home: React.SFC = () => {
  return (
    <div className="container">
      <h1 className="heading">Welcome</h1>
      <div className="cardContainer">
        <Card title="Query" href="/users" />
        <Card title="Mutation" href="/signup" />
        <Card title="Subscription" href="/subscription" />
      </div>
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
          .cardContainer {
            display: flex;
            flex-flow: wrap row;
            justify-content: center;
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

export default Home;
