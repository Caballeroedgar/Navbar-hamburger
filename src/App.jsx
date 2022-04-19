import { Outlet } from 'react-router-dom';
import'./App.css';
import HamburgerMenu from "./components/HamburgerMenu";
import React from 'react'

function App() {
  return (
    <>  
      
        <HamburgerMenu />

    
        <Outlet/>
    

    </>
  );
}

export default App;
