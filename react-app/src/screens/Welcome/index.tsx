/**
 * Welcome Page
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import React from 'react';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import './styles.scss';

const Welcome: React.SFC = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-heading">Welcome</h1>
      <div className="welcome-cardContainer">
        <Card title="Query" href="/users" />
        <Card title="Mutation" href="/update" />
        <Card title="Subscription" href="/subscription" />
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
