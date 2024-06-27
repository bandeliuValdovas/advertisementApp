import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
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

  const authenticateUser = (event) => {
    event.preventDefault();

    axios.post("http://localhost:8080/api/v1/auth/authenticate", {
        email: formData.email,
        password: formData.password})
    .then((response) => {
        console.log(response);
        alert("success");
    }).catch((error) => {
        setErrorMessage(error.response.data.detail);
        console.log("error message:  ", errorMessage);
        console.log(error.response.data.detail);
    });
  };

  return (
    <Form onSubmit={authenticateUser}>
      
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
        Login
      </Button>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </Form>
  );

}; 

export default Login;
