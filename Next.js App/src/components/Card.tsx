import React from "react";
import Link from "next/link";

interface User {
  name: string;
  _id: string;
  phoneNumber: string;
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
    <Link href={props.href}>
      <div className="card">
        <h2>{props.title}</h2>
        <style jsx>
          {`
            .card {
              display: flex;
              height: 5rem;
              width: 20rem;
              justify-content: center;
              padding: 2rem;
              align-self: stretch;
              align-items: center;
              background-color: white;
              margin: 2rem;
              border-radius: 14px 0px 14px 1px;
              -moz-border-radius: 14px 0px 14px 1px;
              -webkit-border-radius: 14px 0px 14px 1px;
              border: 0px solid #000000;
              box-shadow: 0 20px 30px -16px rgba(9, 9, 16, 0.2);
              transition: transform 0.2s;
              cursor: pointer;
            }
            .card:hover {
              transform: scale(1.1);
            }
            h2 {
              font-size: 2rem;
            }
          `}
        </style>
      </div>
    </Link>
  );
};

export const UserCard: React.SFC<UserCardProps> = props => {
  return (
    <div key={props.user._id} className="listCard">
      <img src={props.img} height="90" />
      <div>
        <h2>{props.user._id}</h2>
        <h2>{props.user.name}</h2>
        <h2>{props.user.email}</h2>
        <h2>{props.user.phoneNumber}</h2>
      </div>
      <style jsx>
        {`
          .listCard {
            display: flex;
            flex-flow: wrap row;
            justify-content: space-evenly;
            padding: 2rem;
            -webkit-align-self: stretch;
            align-self: stretch;
            align-items: center;
            background-color: white;
            margin: 2rem;
            border-radius: 14px 0px 14px 1px;
            -moz-border-radius: 14px 0px 14px 1px;
            -webkit-border-radius: 14px 0px 14px 1px;
            border: 0px solid #000000;
            box-shadow: 0 20px 30px -16px rgba(9, 9, 16, 0.2);
            transition: transform 0.2s;
          }
          h2 {
            font-size: 1rem;
            text-align: right;
          }
          img {
            margin-right: 2rem;
          }
        `}
      </style>
    </div>
  );
};

export default Card;
