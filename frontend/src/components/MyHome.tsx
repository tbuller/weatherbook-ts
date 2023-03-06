import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface MyHomeProps {
  navigate: ReturnType<typeof useNavigate>;
}

const MyHome: React.FC<MyHomeProps> = ({ navigate }) => {
  return (
    <div>Hello world</div>
  )
}

export default MyHome;