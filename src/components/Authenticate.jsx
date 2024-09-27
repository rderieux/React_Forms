import { useState } from "react";

export default function Authenticate({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [dataUser, setDataUser] = useState([]);

  async function handleClick() {
    event.preventDefault();
    console.log("Submitted");
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application.json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log(result.data);
      setSuccessMessage(result.message);
      setDataUser(result.data.iat);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      {dataUser && <p>User {dataUser}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
}
