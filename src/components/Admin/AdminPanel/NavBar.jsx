import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

import {jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import * as actionType from '../../../connection/constant/action.Type.js';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

  // Toggle dropdown menu visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

    
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    navigate('/Mrquickfix/admin/login');

    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwtDecode  (token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  // Close the dropdown if clicking outside of it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="border-b border-secondary-100 bg-white p-4">
      <div className="flex justify-end pr-1 md:pr-8 items-center relative">
        <p
          className="mr-4 text-indigo-500 cursor-pointer hover:underline"
          onClick={toggleDropdown}
        >
          John Doe
        </p>
        <FaUserCircle
          className="text-3xl md:text-4xl cursor-pointer"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 top-12 bg-white border border-secondary-100 shadow-lg rounded-lg"
          >
            <ul className="space-y-2 p-2">
              <li className="px-4 py-2 cursor-pointer rounded-md hover:bg-gray-100">My Account</li>
              <li className="px-4 py-2 cursor-pointer rounded-md hover:bg-gray-100" onClick={logout}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
