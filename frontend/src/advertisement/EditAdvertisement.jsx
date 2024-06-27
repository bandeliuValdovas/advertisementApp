import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axiosInstance from "../authentication/axiosInstance";
import { useLocation } from "react-router-dom";

const EditAdvertisement = () => {
  const location = useLocation();
  const data = location.state;
  const [formData, setFormData] = useState({
    title: data.title,
    description: data.description,
    price: data.price,
    city: data.city
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleForm = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(data.id);

  const editAdvertisement = (event) => {
    event.preventDefault();
    axiosInstance
      .patch(`/api/v1/advertisement/${data.id}`, {
        title: formData.title,
        description: formData.description,
        price: formData.price,
        city: formData.city
      })
      .then((response) => {
        console.log(response);
        alert("Advertisement edited successfully!");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.detail);
        console.log("error message:  ", errorMessage);
        console.log(error.response.data.detail);
      });
  };

  return (
    <Form onSubmit={editAdvertisement}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Control
          defaultValue={data.title}
          type="text"
          name="title"
          placeholder="Enter advertisements title"
          onChange={handleForm}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Control
          defaultValue={data.description}
          type="text"
          placeholder="Enter description"
          name="description"
          onChange={handleForm}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Control
          defaultValue={data.price}
          type="number"
          placeholder="Enter price"
          name="price"
          onChange={handleForm}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Control
          defaultValue={data.city}
          type="text"
          placeholder="Enter city"
          name="city"
          onChange={handleForm}
          required
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Edit Advertisement
      </Button>
      <Button>Cancel</Button>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </Form>
  );
};

export default EditAdvertisement;