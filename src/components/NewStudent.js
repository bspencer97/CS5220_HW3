import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function NewStudent
() {
  const [name, setName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [groupid, setGroupId] = useState("");
  const [entries, setEntries] = useState([]);

  let navigate = useNavigate();
  const onSubmit = function (e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/students", {
        name,
        birthYear,
        parentName,
        parentEmail,
        groupid,
      })
      .then(() => navigate("/students"));
  };
    useEffect(() => {
    axios.get("http://localhost:8080/groups").then((res) => setEntries(res.data));
    }, []);

  return (
    <>
    <h2>New Student</h2>
    <form onSubmit={onSubmit}>
      Name:{" "}
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Birth Year:{" "}
      <input
        type="integer"
        name="birthYear"
        value={birthYear}
        onChange={(e) => setBirthYear(e.target.value)}
      />
      <br />
      Parent Name:{" "}
      <input
        type="text"
        name="parentName"
        value={parentName}
        onChange={(e) => setParentName(e.target.value)}
      />
      <br />
      Parent Email:{" "}
      <input
        type="text"
        name="parentEmail"
        value={parentEmail}
        onChange={(e) => setParentEmail(e.target.value)}
      />
      <br />
      Group:{" "}
      <select name="groupid" value={groupid} onChange={(e) => setGroupId(e.target.value)}>
        <option />
        {entries.map((entry) => (          
            <option key={entry.groupNumber} value={entry.groupNumber}>
                {entry.groupName}
            </option>))}
      </select>
      <br />
      <button>Add Student</button>
    </form>
    <br />
    <button><Link to="/students">Back</Link></button>
    </>
  );
}

export default NewStudent;