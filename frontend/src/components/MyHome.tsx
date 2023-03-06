import React from 'react';
import PostForm from './PostForm';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface MyHomeProps {
  navigate: ReturnType<typeof useNavigate>;
}

const MyHome: React.FC<MyHomeProps> = ({ navigate }) => {
  return (
    <div>
    <PostForm />  
    </div>
  )
}

export default MyHome;