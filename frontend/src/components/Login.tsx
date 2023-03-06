import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface LoginProps {
  navigate: ReturnType<typeof useNavigate>;
}

const Login: React.FC<LoginProps> = ({ navigate }) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
  }, [])

  const showUsers = () => {
    console.log(users);
  }

  return (
    <div>
    <div>Hello world</div>
    <button onClick={showUsers}>click</button>
    </div>
  )
}

export default Login;