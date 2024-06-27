import { createContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export { UserProvider, UserContext };
