import React from "react";
import "./ShowLoginDetailsScreen.css";
import { useLoginList } from "../../context/LoginListContext";
import { useState } from "react";

const ShowLoginDetailsScreen = () => {
  const { activeItem, loginList, handleDelete } = useLoginList();

  const [showPassword, setShowPassword] = useState(false);

  const handleOnDelete = () => {
    handleDelete(loginList[activeItem]);
  };

  return (
    <div className="showLoginDetailsScreen">
      {activeItem !== null ? (
        <div
          className="card"
          style={{
            backgroundColor: loginList[activeItem].customer.color,
          }}
        >
          <h2>Login details</h2>
          <div className="login-details">
            <div className="login-detail">
              <p>Title:</p>
              <p>{loginList[activeItem].title}</p>
            </div>
            <div className="login-detail">
              <p>Website:</p>
              <a
                href={
                  loginList[activeItem].website.includes("http")
                    ? loginList[activeItem].website
                    : `http://${loginList[activeItem].website}`
                }
                target="_blank"
                rel="noreferrer"
              >
                {loginList[activeItem].website}
              </a>
            </div>
            <div className="login-detail">
              <p>Username:</p>
              <p>{loginList[activeItem].username}</p>
            </div>
            <div className="login-detail">
              <p>Password:</p>
              <p>
                {showPassword
                  ? loginList[activeItem].password
                  : "*".repeat(loginList[activeItem].password.length)}
              </p>
              <p
                className="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"} password
              </p>
              <p>Customer:</p>
              <p>
                {loginList[activeItem].customer === ""
                  ? "No customer assigned"
                  : loginList[activeItem].customer.name}
              </p>
            </div>
          </div>
          <div>
            <p className="delete" onClick={() => handleOnDelete()}>
              Delete
            </p>
          </div>
        </div>
      ) : (
        <div className="card">
          <h2>Login details</h2>
          <p>Please select a login to view details</p>
        </div>
      )}
    </div>
  );
};

export default ShowLoginDetailsScreen;
