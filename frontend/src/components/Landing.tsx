import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface LandingProps {
  navigate: ReturnType<typeof useNavigate>;
}

const Landing: React.FC<LandingProps> = ({ navigate }) => {


  return (
    <div>Hello world</div>
  )
}

export default Landing;