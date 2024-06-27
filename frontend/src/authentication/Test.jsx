import { useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";
import Logout from "./Logout";

const Test = () => {
    const[data, seData] = useState(null);

    useEffect(() => {

    const getData = async() => {
        axiosInstance.get("/api/v1/demo/demo")
        .then((response2) => {
            console.log(response2);
            seData(response2.data);
        })
        .catch((error) => {
            console.log(error);
        })

    } 
    getData();
   

    }, []);


    return (
      <>
        <div>
          {data ? (
            <div>{JSON.stringify(data)}</div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <button onClick={()=>Logout()}>logout</button>
        </>
      );


}
export default Test;