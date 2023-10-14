import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  const [data, setData] = useState([]);
  const columns = ['Sno', 'Profile Pic', 'First Name', 'Last Name', 'Gender', 'Email', 'Username', 'Domain', 'IP', 'University'];

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App" style={{ backgroundColor: 'black' }}>
      <h1 style={{ textAlign: 'center' }}>Dummy Data</h1>

      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>
                <b>{column}</b>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img src={user.profilePic} alt="Profile Pic" width="50" height="50" />
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.domain}</td>
                <td>{user.ip}</td>
                <td>{user.university}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
