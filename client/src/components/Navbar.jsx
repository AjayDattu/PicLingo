import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import '../Styles/Navbar.css';
import Spline from '@splinetool/react-spline';

function Navbar() {
  const navigate = useNavigate(); // React Router's navigate function

  const handleLogout = () => {
    // Perform logout actions here, such as clearing local storage or making an API call to invalidate the token
    localStorage.removeItem('token'); // Example: Remove token from localStorage

    // Redirect to the login page after logout
    navigate('/login'); // Redirect to login page
  };

  const token = localStorage.getItem('token'); // Check for the presence of the token

  return (
    <>
      <div className='Navbar'>
        <div className='section1'>
          <h1><b className='red'>P</b>iclingo</h1>
        </div>
        <div className='section2'>
          {token ? (
            <button className="button" onClick={handleLogout}>Log out</button>
          ):(
            <h1></h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
