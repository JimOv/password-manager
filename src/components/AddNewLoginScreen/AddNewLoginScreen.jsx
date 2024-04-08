import React from "react";
import "./AddNewLoginScreen.css";
import { useLoginList } from "../../context/LoginListContext";
import { useState } from "react";
import { getCustomerData } from "../../services/getCustomerData";
import { useEffect } from "react";

const AddNewLoginScreen = () => {
  const { setShowAddLoginScreen, setLoginList, loginList } = useLoginList();

  const [title, setTitle] = useState("");
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [customer, setCustomer] = useState("");

  const [customerList, setCustomerList] = useState([]);

  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCapitals, setIncludeCapitals] = useState(false);

  useEffect(() => {
    getCustomerData().then((data) => {
      setCustomerList(data);
    });
  }, []);

  const generatePassword = (e) => {
    e.preventDefault();
    const numbers = "0123456789";
    const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let characters = lowerCase;
    if (includeNumbers) {
      characters += numbers;
    }
    if (includeCapitals) {
      characters += capitals;
    }
    let password = "";
    for (let i = 0; i < 10; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(password);
  };

  const close = () => {
    setShowAddLoginScreen(false);
  };

  const addLoginToList = (e) => {
    e.preventDefault();
    if (!title || !website || !username || !password) {
      alert("Please fill in all fields");
      return;
    }
    const newLogin = {
      title: title,
      website: website,
      username: username,
      password: password,
      customer: customer === "" ? "" : customerList[customer],
    };
    setLoginList([...loginList, newLogin]);
    setShowAddLoginScreen(false);
  };

  return (
    <div className="add-new-login-screen">
      <div className="modal">
        <div>
          <h2>Add new login</h2>
          <button onClick={close} className="closeBtn">
            X
          </button>
        </div>
        <form onSubmit={(e) => addLoginToList(e)}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onInput={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            onInput={(e) => setWebsite(e.target.value)}
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onInput={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Generate a password</label>
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Include numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeCapitals}
              onChange={() => setIncludeCapitals(!includeCapitals)}
            />
            Include capital letters
          </label>
          <button className="generate-btn" onClick={(e) => generatePassword(e)}>
            Generate Password
          </button>
          {password && (
            <>
              <label className="password" htmlFor="generatedPassword">
                Your generated password:
              </label>
              <input
                type="text"
                id="generatedPassword"
                name="generatedPassword"
                value={password}
                readOnly
              />
            </>
          )}

          <label htmlFor="tags">Add customer</label>
          <select
            name="tags"
            id="tags"
            onChange={(e) => setCustomer(e.target.value)}
          >
            <option value="">Select a customer</option>
            {customerList.map((customer, key) => (
              <option key={key} value={key}>
                {customer.name}
              </option>
            ))}
          </select>
          <button type="submit">Add login</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewLoginScreen;
