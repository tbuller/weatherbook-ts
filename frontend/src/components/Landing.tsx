import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface LandingProps {
  navigate: ReturnType<typeof useNavigate>;
}

const Landing: React.FC<LandingProps> = ({ navigate }) => {


  return (
    <div>
    <h1>Welcome to Weatherbook!</h1>
    <h3>An open space to complain about the weather</h3>
    </div>
  )
}

export default Landing;