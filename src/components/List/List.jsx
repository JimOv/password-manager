import React from "react";
import "./List.css";
import { useLoginList } from "../../context/LoginListContext";
import Search from "../Search/Search";

const List = () => {
  const { loginList, activeItem, setActiveItem, filteredList } = useLoginList();

  const handleClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="list">
      <div className="list-title">
        <h3>Account list</h3>
        <h4>Your logins: {loginList.length} </h4>
      </div>
      <Search />
      {loginList.length === 0 ? (
        <p className="empty-list">Your login list is empty</p>
      ) : (
        <ul>
          {filteredList.length === 0 ? (
            loginList.map((login, index) => (
              <li
                key={index}
                className={activeItem === index ? "active" : ""}
                onClick={() => handleClick(index)}
              >
                <span className="title">{login.title}</span>
                <span>{login.username}</span>
              </li>
            ))
          ) : filteredList.length > 0 ? (
            filteredList.map((login, index) => (
              <li
                key={index}
                className={activeItem === index ? "active" : ""}
                onClick={() => handleClick(index)}
              >
                <span className="title">{login.title}</span>
                <span>{login.username}</span>
              </li>
            ))
          ) : (
            <p>No results found</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default List;
