import React from "react";
import { Form, Button } from "react-bootstrap";

export const CreateUser = () => {
    const submit=(e)=>{
        e.preventDefault()
    }
  return (
    <div style={{ margin: "20px", width: "50%", marginLeft: "300px" }}>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
