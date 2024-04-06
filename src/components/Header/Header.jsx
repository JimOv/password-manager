import React from "react";
import "./Header.css";
import AddNewLoginScreen from "../AddNewLoginScreen/AddNewLoginScreen";
import { useLoginList } from "../../context/LoginListContext";

const Header = () => {
  const { showAddLoginScreen, setShowAddLoginScreen } = useLoginList();
  const handleClick = () => {
    setShowAddLoginScreen(true);
  };

  return (
    <>
      <div className="header">
        <h1>Password Manager</h1>
        <p onClick={handleClick}>Add new login +</p>
      </div>
      {showAddLoginScreen && <AddNewLoginScreen />}
    </>
  );
};

export default Header;
