import { Form, Button, Card } from "react-bootstrap";
import React, {useRef} from 'react';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
        <Form>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required/>
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required/>
          </Form.Group>
          <Form.Group id="password-confirmation">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" ref={passwordConfirmationRef} required/>
          </Form.Group>
          <Button className="w-100" type="submit">
            Signup
            </Button>
        </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">Login</div>
    </>
  );
}
