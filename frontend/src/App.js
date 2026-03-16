import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    axios.get("http://localhost:8080/api/users")
      .then(res => {
        setUsers(res.data);
      });
  };

  const saveUser = () => {

    const user = {
      name: name,
      email: email
    };

    axios.post("http://localhost:8080/api/users", user)
      .then(res => {

        alert("User Saved!");

        setName("");
        setEmail("");

        loadUsers(); // reload grid
      });
  };

  return (

    <div style={{textAlign:"center"}}>

      <h1>User Management</h1>

      <div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <button onClick={saveUser}>Save</button>
      </div>

      <br/>

      <table border="1" style={{margin:"auto"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>

          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;