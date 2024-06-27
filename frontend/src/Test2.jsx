import { useContext } from "react";
import { UserContext } from "./components/UserContext";




const Test2 = () => {
    const {userInfo} = useContext(UserContext);
    


  return (
  <>
   {userInfo ? (
        <div>{userInfo.name}</div>
      ) : (
        <div>No user information available</div>
      )}


  </>
  );
};
export default Test2;
