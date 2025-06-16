import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar' // imported navbar so its across the whole web application 

const MainLayout = () => {
  return  <>
   <Navbar /> 
   <Outlet />
  </>;
  
};

export default MainLayout