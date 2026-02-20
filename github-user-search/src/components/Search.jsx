import { useState } from 'react';

function Search() {
  const [username, setUsername] = useState("");

  // This runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="github-username"
        name="githubUsername"
        placeholder="Enter Github username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </form>
  )
  }