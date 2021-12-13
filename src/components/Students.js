import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Students() {
  var currentTime= new Date();
  var year = parseInt(currentTime.getFullYear());
  const [entries, setEntries] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:8080/students").then((res) => setEntries(res.data));
    }, []);
  return (
    <>
    <h2>Students</h2>
    <p><Link to="/newStudent">New Student</Link> </p>
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Parent</th>
          <th>Email</th>
          <th>Group</th>
          <th>Active</th>
        </tr>           
      </thead>
      <tbody>
        {entries.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.name}</td>
            <td>{year-entry.birthYear}</td>               
            <td>{entry.parentName}</td>
            <td>{entry.parentEmail}</td>
            <td>{entry.groupName}</td>
            <td>{entry.active.toString()}</td>            
          </tr>
        ))}
      </tbody>
    </table>
    <br />
    <button><Link to="/">Home</Link></button>
    </>
  );
}
    
export default Students;