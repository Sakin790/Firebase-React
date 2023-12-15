import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useFirebase } from "../context/Firebase";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const firebase = useFirebase();
  console.log(firebase);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login in user..");
    const result = await firebase.signInUserWithEmailAndPassword(
      email,
      password
    );
    console.log("Successfully Login", result);
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
      <h1>Login Your Account</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setemail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
          Login
        </Button>
      </Form>
      <h1>or</h1>
      <Button
        onClick={firebase.signInWithGoogle}
        variant="danger"
        type="submit"
      >
        Login with google
      </Button>
    </div>
  );
};

export default Login;
