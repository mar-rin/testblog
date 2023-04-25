import React, { createContext, useState } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {

  const [loggedIn, setLoggedIn] = useState(true);
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");
  const [active, setActive] = useState("");
  // const [paths, setPaths] = useState([])

  return (
    <StateContext.Provider value={{ loggedIn, setLoggedIn, title, setTitle, data, setData, active, setActive}}>
      {children}
    </StateContext.Provider>
  );
};