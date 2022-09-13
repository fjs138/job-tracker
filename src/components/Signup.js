import {Form, Button, Card, Alert} from 'react-bootstrap';
import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signup,currentUser } = useAuth();

  const [error, setError] = useState("");

  const [loading,setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    // compare password field and password confirmation field
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      // set error back to empty string
      setError("");
      setLoading(true);

      // wait for signup to finish
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create account");
    }
    setLoading(false);
  }

  return (
      <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {currentUser && currentUser.email}
          {error && <Alert variant="danger">{error}</Alert> }
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirmation">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmationRef}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">Login</div></>
  );
}
