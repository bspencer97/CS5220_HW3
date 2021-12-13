import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Groups() {
  const [entries, setEntries] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:8080/groups").then((res) => setEntries(res.data));
    }, []);

  return (    
    <>
    <h2>Groups</h2>
    <p><Link to="/NewGroup">New Group</Link></p>
    <table border="1">
      <thead>
      <tr>
          <th>Group</th>
          <th>Members</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => {
          return (
          <tr key={entry.groupNumber}>
            <td>{entry.groupName}</td>           
            {
              entry.students.map(student => {
                return (
              <td>{student.name}</td>
                )
              })
            }
          </tr>
        )})}
      </tbody>
    </table>
    <br />
    <button><Link to="/">Home</Link> </button>
    </>
  );
}
    
export default Groups;