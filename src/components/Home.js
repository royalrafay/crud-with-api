import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export const Home = (props) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);
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
      .catch(() => alert("something went wrong on get api"));
  }, [refetch]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then(() => {
        setRefetch(!refetch);
        alert("user deleted succesfully");
      })
      .catch(() => alert("something went wrong"));
  };
  return (
    <div>
      <br />
      <br />
      <Button onClick={handleAddUser}>add users</Button>
      <br />
      <br />
      {isLoading && <p>loading....</p>}
      {!isLoading && (
        <Table striped bordered hover>
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
                  <td>
                    <Link to={`view/${user.id}`}>{user.name}</Link>
                  </td>
                  <td>{user.age}</td>
                  <td>{user.address}</td>
                  <td>
                    <Button
                      onClick={() => {
                        handleDelete(user.id);
                      }}
                    >
                      delete
                    </Button>
                    {"  "}
                    <Link to={`edit/${user.id}`}>
                      <Button>update</Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};
