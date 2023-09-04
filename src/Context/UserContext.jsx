import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState(localStorage.getItem('savedUserName') || "")
  const [userId, setUserId] = useState(localStorage.getItem('userid') || null)

  return (
    <UserContext.Provider value={{ userName, setUserName, userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
