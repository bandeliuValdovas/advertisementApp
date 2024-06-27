import axiosInstance from "../authentication/axiosInstance";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const AdvertisementDetails = () => {

  const [advertisement, setAdvertisement] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
//   const onEditBookButton = useNavigate();

  useEffect(() => {
    axiosInstance
      .get(`/api/v1/advertisement/${id}`)
      .then((data) => {
        console.log("add desponse: ", data)
        setAdvertisement(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const deleteAdvertisement = (id) =>{
    console.log("advertisement id",advertisement.id)
           

    axiosInstance
    .delete(`/api/v1/advertisement/${id}`)
    .then((response)=>{
        console.log("delete response", response.data);
        alert("deleted successfully");
    })
    .catch((error)=>{
        console.log(error)
    })
}




  if (isLoading) {
    return <div>DATA IS LOADING</div>;
  }

  const { title, description, city, price} = advertisement;

  return (
    <>
      <Card style={{ margin: "10vh" }}>
        {/* <Col >
                        <img src={image} alt="picture" />
                    </Col> */}

        <h5>Title</h5>
        <p>{title}</p>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
        <p>City {city}</p>
        
        {/* <Button variant="warning" onClick={()=>onEditBookButton("/editbook/", {state: book})}>Edit Book</Button> */}
        <Button variant="danger" onClick={()=>deleteAdvertisement(id)}>Delete</Button>
      </Card>
    </>
  );
};
export default AdvertisementDetails;
