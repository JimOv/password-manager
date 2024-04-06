import React, { useState } from "react";
import "./List.css";
import { useLoginList } from "../../context/LoginListContext";

const List = () => {
  const { loginList, activeItem, setActiveItem } = useLoginList();

  const handleClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="list">
      <div className="list-title">
        <h3>Account list</h3>
        <h4>Your logins: {loginList.length} </h4>
      </div>
      {loginList.length === 0 ? (
        <p className="empty-list">Your login list is empty</p>
      ) : (
        <ul>
          {loginList.map((login, index) => (
            <li
              key={index}
              className={activeItem === index ? "active" : ""}
              onClick={() => handleClick(index)}
            >
              <span className="title">{login.title}</span>
              <span>{login.username}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
