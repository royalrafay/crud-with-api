import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export const CreateUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", age: "", address: "" });
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users", { ...formData, id: uuid() })
      .then(() => navigate("/"))
      .catch(() => alert("something went wrong"));
  };
  const handleInput = (e, type) => {
    setFormData({ ...formData, [type]: e.target.value });
  };

  return (
    <div style={{ margin: "20px", width: "50%", marginLeft: "300px" }}>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => {
              handleInput(e, "name");
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>age</Form.Label>
          <Form.Control
            type="number"
            placeholder="age"
            onChange={(e) => {
              handleInput(e, "age");
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>address</Form.Label>
          <Form.Control
            type="text"
            placeholder="address"
            onChange={(e) => {
              handleInput(e, "address");
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
