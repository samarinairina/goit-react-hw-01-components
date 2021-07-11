import React from "react";
import PropTypes from "prop-types";
import Style from "./friend.module.scss";


function Friends({name, isOnline, avatar}) {
    return (
    <>
      <li className={Style.item}>
        <span className={isOnline ? Style.online : Style.offline}></span>
        <img className={Style.avatar} src={avatar} alt={name} width="48" />
        <p className={Style.name}>{name}</p>
      </li>
    </>
  );
}

Friends.propTypes = {
  id: PropTypes.string,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
    name:PropTypes.string,
}

export default Friends;