import React from 'react';
import PostForm from './PostForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, UsersState } from '../redux/users';
import { useState, useEffect } from 'react';

interface MyHomeProps {
  navigate: ReturnType<typeof useNavigate>;
}

const MyHome: React.FC<MyHomeProps> = ({ navigate }) => {

  const dispatch = useDispatch();
  const users = useSelector((state: { users: UsersState }) => state.users.users);



  return (
    <div>
    <PostForm />  
    </div>
  )
}

export default MyHome;