import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

export const EditUser = () => {
  const [formData, setFormData] = useState({ name: "", age: "", address: "" });
  const { Id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${Id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch(() => alert("something went wrong on get api"));
  }, []);
  const handleInput = (e, type) => {
    setFormData({ ...formData, [type]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/users/${Id}`, formData)
      .then((res) => navigate("/"));
  };
  return (
    <div>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={formData.name}
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
            value={formData.age}
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
            value={formData.address}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
