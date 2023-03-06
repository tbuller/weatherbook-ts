import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface SignupProps {
  navigate: ReturnType<typeof useNavigate>;
}

const Signup: React.FC<SignupProps> = ({ navigate }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [signupError, setSignupError] = useState(false);

  const createUser = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fetch("http://localhost:8080/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email, password: password, username: username })
    }).then((response) => {
      if (response.status === 200) {
        console.log(response);
      } else if (response.status === 409) {
        setSignupError(true);
      } else {
        console.log("other error");
      }
    });
  }

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  return (
    <div className="signup-container">
    <h1>Create an account to start complaining about the weather</h1>
    <form className="signup-form">
    <label>Email:</label>
    <input type="text" onChange={handleEmail}/>
    <label>Password:</label>
    <input type="password" onChange={handlePassword}/>
    <label>Username:</label>
    <input type="text" onChange={handleUsername}/>
    <button onClick={createUser}>Click</button>
    </form>
    {signupError && <div>You need to create a unique email and username. Please log in if you already have an account.</div>}
    </div>
  )
}

export default Signup;