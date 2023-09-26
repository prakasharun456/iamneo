import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useState } from "react";

import { add, remove } from "../redux/User";

export default function Crud() {
  const { users } = useSelector((state) => state.user);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <Container>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>SI no</th>
              <th>id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>
                    <button onClick={() => dispatch(remove(u.id))}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <button>Update</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>

      <div>
        <label>id :</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <label>name :</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button
          onClick={() => {
            if (!id || !name) {
              return;
            }
            dispatch(add({ id: id, name: name }));
            setId("");
            setName("");
          }}
        >
          add
        </button>
      </div>
    </div>
  );
}
