import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/myea-logo.svg';

function Nav() {
  return (
    <>
      <div className='flex flex-row bg-slate-500 sm:hidden'>
        {/* <div className="w-50 h-50">
          <img src={Logo} alt="Logo" className="w-50 h-50" />
        </div> */}
        <MenuIcon />
      </div>
      <div className='hidden flex-row bg-slate-500 sm:flex'>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/myecohome'>Myecohome</Link>
        </nav>
      </div>
    </>
  );
}

export default Nav;
