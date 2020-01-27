/**
 * No Match Page
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import React from 'react';
import Footer from '../../components/Footer';
import './styles.scss';

const NoMatch: React.SFC = () => {
  return (
    <div className="nomatch-container">
      <h1 className="nomatch-heading">No Match Found | 404</h1>
      <Footer />
    </div>
  );
};

export default NoMatch;
