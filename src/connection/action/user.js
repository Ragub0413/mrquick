import { AUTH } from "../constant/action.Type";
import * as api from '../api/index.js';
//import React,{useState,useEffect} from "react";

export const signInStaff = (loginData,navigate) => async (dispatch) => {
    try {
      const { data } = await api.signInStaff(loginData);
      //const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
      
      dispatch({ type: AUTH, data });
      navigate(`/Mrquickfix/admin/dashboard/`) 
      
    } catch (error) {
      console.log(error);
      alert("Please Check your Information");
    }
  };