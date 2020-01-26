/**
 * List Component
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import React from 'react';
import { UserCard } from '../Card';
import './styles.scss';

interface User {
  name: string;
  _id: string;
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
        <UserCard key={user._id} user={user} img={props.img} />
      ))}
    </>
  );
};

export default List;
