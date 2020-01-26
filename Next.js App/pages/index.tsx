/**
 * Main Page
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import React from 'react';
import Login from '../src/components/Login';
import Footer from '../src/components/Footer';

const Home: React.SFC = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <Login />
      </div>
      <Footer />
      <style jsx>
        {`
          .mainContainer {
            height: 100%;
            min-height: 100vh;
            width: 100%;
          }
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: row wrap;
            padding: 8rem 0rem !important;
          }
          .heading {
            color: white;
            text-align: center;
            font-size: 5rem;
            padding: 2rem;
          }
          @media only screen and (max-width: 740px) {
            .container {
              padding: 3rem 0rem !important;
            }
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
