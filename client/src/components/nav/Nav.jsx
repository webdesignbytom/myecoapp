import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/myea-logo.svg';

function Nav() {
  return (
    <>
      <div className='flex flex-row betwe w-full px-2 mx-auto bg-green-500 sm:flex hover:text-slate-50 items-center'>
        <img src={Logo} alt='logo' className='w-12 h-12 mr-3' />
        <div className='flex flex-row bg-green-500 sm:hidden justify-end'>
          <MenuIcon />
        </div>

        <nav className='hidden flex-row w-full justify-end items-center sm:flex'>
          <ul className='flex flex-row items-center'>
            <li>
              <Link
                to='/'
                className='block py-2 pl-3 pr-4 text-white hover:text-slate-300'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='block py-2 pl-3 pr-4 text-white hover:text-slate-300'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/myecohome'
                className='block py-2 pl-3 pr-4 text-white hover:text-slate-300'
              >
                Myecohome
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
