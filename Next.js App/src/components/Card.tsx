import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  href: string;
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

export default Card;
