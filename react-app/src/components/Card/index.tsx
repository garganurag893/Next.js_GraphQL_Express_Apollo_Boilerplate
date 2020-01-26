/**
 * Card Component
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

interface User {
  name: string;
  _id: string;
  email: string;
}

interface CardProps {
  title: string;
  href: string;
}

interface UserCardProps {
  user: User;
  img: string;
}

const Card: React.SFC<CardProps> = props => {
  return (
    <Link to={props.href}>
      <div className="card">
        <h2>{props.title}</h2>
      </div>
    </Link>
  );
};

export const UserCard: React.SFC<UserCardProps> = props => {
  return (
    <div key={props.user._id} className="listCard">
      <img src={props.img} alt="user" height="90" />
      <div className="userCardDetails">
        <h2>{props.user.name}</h2>
        <h2>{props.user.email}</h2>
      </div>
    </div>
  );
};

export default Card;
