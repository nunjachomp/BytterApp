import React, { createContext, useState } from 'react';

    export const BytContext = createContext();

    export const BytContextProvider = ({children}) => {
      const [tweets, setTweets] = useState([]);
      const [loading, setLoading] = useState(false);

        return (
          <BytContext.Provider value={{tweets, setTweets, loading, setLoading}}>
            {children}
          </BytContext.Provider>
        );
      };

      export default BytContextProvider;