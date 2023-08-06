import React, { createContext, useState } from 'react';

    export const BytContext = createContext();

    export const BytContextProvider = ({children}) => {
      
      const LOCAL_STORAGE_USERNAME = "savedUserName";
      const storedUserName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERNAME));

      const [userName, setUserName] = useState(storedUserName || ''); 
      const [tweets, setTweets] = useState([]);
      const [rerenderFlag, setRerenderFlag] = useState(false); 
      const [loading, setLoading] = useState(false);

        return (
          <BytContext.Provider value={{storedUserName, userName, setUserName, tweets, setTweets, rerenderFlag, setRerenderFlag, loading, setLoading}}>
            {children}
          </BytContext.Provider>
        );
      };

      export default BytContextProvider;