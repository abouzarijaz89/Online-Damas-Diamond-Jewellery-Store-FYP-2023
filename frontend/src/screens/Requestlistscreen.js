import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listUsers, deleteUser } from "../actions/userActions";
import axios from "axios";
const UserListScreen = ({ history }) => {
    const [users, setUser] = useState([]);

    const handleSubmit = async (e) => {
        

    
        try{
          const response = await axios.get("http://localhost:5000/api/request");
          console.log(response)
          setUser(response.data)
        }
        catch(e)
        {
          console.log(e);
        }
  
      };

  useEffect(() => {
    handleSubmit()
  }, []);


  return (
    <>
      <h1>Users</h1>
      <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>Requested At</th>
              <th>NAME</th>
              <th>EMAIL</th>
              
              <th>description</th>
              <th>size</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.createdAt.substring(0,10)}</td>
                <td>{user.name}</td>
                <td>
                  <a >{user.email}</a>
                </td>
                <td>
                    {user.description}
                </td>
                <td>
                    {user.size}
                </td>

              </tr>
            ))}
          </tbody>
        </Table>
    </>
  );
};

export default UserListScreen;
