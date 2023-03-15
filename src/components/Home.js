import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Home = (props) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleAddUser = () => {
    navigate("create");
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch(() => alert("something went wrong"));
  }, []);
  return (
    <div>
      <br />
      <br />
      <Button onClick={handleAddUser}>add users</Button>
      <br />
      <br />
      {isLoading && <p>loading....</p>}
      {!isLoading &&<Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>age</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.address}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>}
    </div>
  );
};
