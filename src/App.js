import React from "react";
import { useState } from "react";
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (firstName.trim() === "" || lastName.trim() === "") {
      alert("please fill out this field");
      return;
    }
    setFullName(`${firstName} ${lastName}`);

  }
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        <div>
          <label>First Name:
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>Last Name:
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
