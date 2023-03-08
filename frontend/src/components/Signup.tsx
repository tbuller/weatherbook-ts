import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, selectAllUsers, User } from '../redux/users';

interface SignupProps {
  navigate: ReturnType<typeof useNavigate>;
}

const Signup: React.FC<SignupProps> = ({ navigate }) => {

  const users: User[] = useSelector(selectAllUsers);

  const dispatch = useDispatch();  
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
    }).then((response) => response.json())
      .then((data) => {
        if (data.message === "OK") {
          console.log("it works");
          const user = data.user;
          dispatch(addUser(user));
        } else if (data.message === "email already in use") {
          console.log("email duplicate");
        } else if (data.message === "username already taken") {
          console.log("username duplicate");
        } else {
          console.log("server error");
        }
      })
    ;
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
    {users.map(u => 
      <div key={u._id}>{u.username}</div>
      )}
    </div>
  )
}

export default Signup;