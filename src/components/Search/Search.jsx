import React, { useEffect, useState } from "react";
import { useLoginList } from "../../context/LoginListContext";
import "./Search.css";

const Search = () => {
  const { loginList, setFilteredList, setActiveItem } = useLoginList();

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const filteredList = loginList.filter((login) =>
      login.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredList(filteredList);
    setActiveItem(null);
  }, [searchQuery, loginList, setFilteredList, setActiveItem]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
