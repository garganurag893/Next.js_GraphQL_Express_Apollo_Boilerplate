import React from "react";

interface User {
  name: string;
  _id: string;
  phoneNumber: string;
  email: string;
}

interface ListProps {
  data: [User];
  img: string;
}

const List: React.SFC<ListProps> = props => {
  return (
    <>
      {props.data.map((user: User) => (
        <div key={user._id} className="listCard">
          <img src={props.img} height="90" />
          <div>
            <h2>{user._id}</h2>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <h2>{user.phoneNumber}</h2>
          </div>
        </div>
      ))}
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
          .List:hover {
            transform: scale(1.1);
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
    </>
  );
};

export default List;
