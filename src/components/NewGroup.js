import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function NewGroup
() {
  const [groupName, setGroupName] = useState("");

  let navigate = useNavigate();
  const onSubmit = function (e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/groups", {
        groupName,
      })
      .then(() => navigate("/groups"));
  };

  return (
    <>
    <h2>New Group</h2>
    <form onSubmit={onSubmit}>
      Name:{" "}
      <input
        type="text"
        name="groupName"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      <br />
      <button>Add Group</button>
    </form>
    <br />
    <button><Link to="/groups">Back</Link></button>
    </>
  );
}

export default NewGroup;