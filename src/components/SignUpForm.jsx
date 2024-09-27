import { useState } from "react";

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

export default function SignUpForm() {
  return (
    <>
      <h2>Sign Up</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="text" name="username" />
        </label>
        <label>
          Error:
          <input type="text" name="username" />
        </label>
      </form>
    </>
  );
}
