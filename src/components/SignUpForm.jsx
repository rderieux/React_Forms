import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application.json" },
          body: JSON.stringify(),
        }
      );
      const result = await response.json();
      console.log(result);
      setToken(result.token);
      setError(null);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            placeholder="type your username..."
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="username"
            value={password}
            placeholder="type your password..."
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
