import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface LoginProps {
  navigate: ReturnType<typeof useNavigate>;
}

const Login: React.FC<LoginProps> = ({ navigate }) => {

  const [users, setUsers] = useState<any[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorrect, setIncorrect] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
  }, [])

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const matchesUser = users.find(u => u.email === email && u.password === password);
    if (matchesUser) {
      setIncorrect(false);
      localStorage.setItem("userId", matchesUser._id);
      navigate("/myhome");
    } else {
      setIncorrect(true);
    }
  }

  return (
    <div>
    <h1>Log in to your account</h1>
    <form>
    <label>Email:</label>
    <input type="text" onChange={handleEmail}/>
    <label>Password:</label>
    <input type="password" onChange={handlePassword}/>
    <button onClick={handleLogin}>click</button>
    </form>
    {incorrect && <div>Incorrect email or password</div>}
    </div>
  )
}

export default Login;