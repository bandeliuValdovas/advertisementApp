import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axiosInstance from "../authentication/axiosInstance";

const CreateAdvertisement = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    city: ""
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleForm = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const addAdvertisement = (event) => {
    event.preventDefault();

    axiosInstance.post("/api/v1/advertisement",{
        title: formData.title,
        description: formData.description,
        price: formData.price,
        city: formData.city
    }).then((response) => {
        console.log(response);
        alert("Advertisement created!");
    }).catch((error) => {
        setErrorMessage(error.response.data.detail);
        console.log("error message:  ", errorMessage);
        console.log(error.response.data.detail);
    });
  };

  return (
    <Form onSubmit={addAdvertisement}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter advertisement title"
          onChange={handleForm}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Control
          type="text"
          placeholder="Enter description"
          name="description"
          onChange={handleForm}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Control
          type="number"
          placeholder="Enter price"
          name="price"
          onChange={handleForm}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Control
          type="text"
          placeholder="Enter City"
          name="city"
          onChange={handleForm}
          required
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Create Advertisement
      </Button>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </Form>
  );
};

export default CreateAdvertisement;
