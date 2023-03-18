import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

export const UserDeatailView = (props) => {
  const [userData, setUserData] = useState({});
  const { Id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${Id}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch(() => alert("something went wrong on get api"));
  }, []);

  return (
    <div>
      {" "}
      <Card style={{ width: "18rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>{userData.name}</ListGroup.Item>
          <ListGroup.Item>{userData.age}</ListGroup.Item>
          <ListGroup.Item>{userData.address}</ListGroup.Item>
        </ListGroup>
      </Card>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </Button>
    </div>
  );
};
