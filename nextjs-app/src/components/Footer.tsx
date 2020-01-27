/**
 * Footer Component
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import React from 'react';

const Footer: React.SFC<any> = props => {
  return (
    <footer className="footer">
      <div className="footer-text-container">
        <p>
          &copy; Copyright 2020{' '}
          <a href="https://twitter.com/AnuragG94634191">Anurag Garg</a>
        </p>
      </div>
      <style jsx>
        {`
          .footer {
            color: rgba(255, 255, 255, 0.5);
            margin-top: auto !important;
          }
          .footer-text-container {
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
            text-align: center !important;
            color: rgba(255, 255, 255, 0.5);
          }
          a {
            text-decoration: none;
            color: white;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
