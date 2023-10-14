import React, { useEffect, useState } from 'react';

const Usertable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the remote URL
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <table>
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
};

export default Usertable;