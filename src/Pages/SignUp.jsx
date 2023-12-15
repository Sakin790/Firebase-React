import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import React, { useState,useEffect } from "react";

const SignUp = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState("");
  const firebase = useFirebase();
  console.log(firebase);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
console.log('Creating user...');
    await firebase.createUsersWithEmailAndPassword(email, password);
    console.log('Successfully Created');
  };

  
  const navigate = useNavigate();
  useEffect(() => {
    if (firebase.isLoggedin) {
      //navigate from home usevanigation import korte hobe
      navigate("/");
    }
  }, [firebase, navigate]);

  return (
    <div className="container mt-5 bg-dark text-white">
      <h1>Create Your Account</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setemail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Account
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
