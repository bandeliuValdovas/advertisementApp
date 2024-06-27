import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleForm = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const addUser = (event) => {
    event.preventDefault();

    axios.post("http://localhost:8080/api/v1/auth/register", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password})
    .then((response) => {
        console.log(response);
        alert("User Created");
    }).catch((error) => {
        setErrorMessage(error.response.data.detail);
        console.log("error message:  ", errorMessage);
        console.log(error.response.data.detail);
    });
  };

  return (
    <Form onSubmit={addUser}>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Control
          type="text"
          name="firstName"
          placeholder="Enter first name"
          onChange={handleForm}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Control
          type="text"
          placeholder="Enter Last Name"
          name="lastName"
          onChange={handleForm}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleForm}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={handleForm}
          required
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Register
      </Button>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </Form>
  );





}; 

export default RegisterUser;