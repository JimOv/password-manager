import React, { createContext, useState, useContext, useEffect } from "react";

const LoginListContext = createContext();

export function useLoginList() {
  return useContext(LoginListContext);
}

export function LoginListThemeProvider({ children }) {
  const [loginList, setLoginList] = useState(
    localStorage.getItem("loginList") === null
      ? []
      : JSON.parse(localStorage.getItem("loginList"))
  );
  const [showAddLoginScreen, setShowAddLoginScreen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    localStorage.setItem("loginList", JSON.stringify(loginList));
  }, [loginList]);

  const handleDelete = (item) => {
    const updatedList = loginList.filter((login) => login !== item);
    setActiveItem(null);
    setLoginList(updatedList);
  };

  return (
    <LoginListContext.Provider
      value={{
        loginList,
        setLoginList,
        showAddLoginScreen,
        setShowAddLoginScreen,
        activeItem,
        setActiveItem,
        handleDelete,
        filteredList,
        setFilteredList,
      }}
    >
      {children}
    </LoginListContext.Provider>
  );
}

export default LoginListContext;
