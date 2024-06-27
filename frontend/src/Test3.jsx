import React, { useContext } from 'react';
import { UserContext } from './components/UserContext';

const Test3 = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const handleLogin = () => {
    // Example user data
    const userData = { name: 'John Doe', email: 'john@example.com' };
    setUserInfo(userData);
  };

  const handleLogout = () => {
    setUserInfo(null);
  };

  return (
    <div>
      {userInfo ? (
        <>
          <h1>Welcome, {userInfo.name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Please log in</h1>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default Test3;