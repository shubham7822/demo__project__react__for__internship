import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";

export const Navbar = () => {
  return (
    <div className='Side__Nav'>
      <div className='SideNav__Container'>
        <Link className='SideNav__link' to='/'>
          <span className='SideNav__head active'>
            <img className='SideNav__Icon' src='./Dashboard.png' />
            <h3>Dashboard</h3>
          </span>
        </Link>
        <Link className='SideNav__link' to='/lorem'>
          <span className='SideNav__head'>
            <img className='SideNav__Icon' src='./Vr.png' />
            <h3>Lorem</h3>
          </span>
        </Link>
        <span className='SideNav__head'>
          <img className='SideNav__Icon' src='./Settings.png' />
          <h3>lpsum</h3>
        </span>
      </div>
    </div>
  );
};
