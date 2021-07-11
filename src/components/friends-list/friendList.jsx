import React from 'react';
import PropTypes from "prop-types";
import Friends from './friend'
import Style from "./FriendList.module.scss";


const FriendList = ({ friends }) => {
    if (friends.length === 0) return null;

    return (
      <ul className={Style.friendList}>
  {friends.map(({ id, isOnline, avatar, name }) => (
      <li key={id}>
        <Friends
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      </li>
    ))}
        </ul>
       
    )
}
FriendList.defaultProps = {
  friends: [],
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};


export default FriendList;