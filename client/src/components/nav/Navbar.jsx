import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/myea-logo.svg';

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/myecohome', title: 'MyEcoHome' },
  { url: '/games', title: 'Games' },
  { url: '/account', title: 'Account' },
];

function Navbar() {
  return (
    <>
      <div className='flex flex-row justify-between w-full px-8 mx-auto bg-eco-green sm:flex hover:text-slate-50 items-center'>
        {/* Left hand side of nav perminent */}
        <Link to='/'>
          <img src={Logo} alt='logo' className='w-12 h-12 mr-3' />
        </Link>

        {/* small screen menu */}
        <div className='flex flex-row bg-green-500 sm:hidden justify-end'>
          <MenuIcon />
        </div>
        {/* Large screen menu */}
        <nav className='hidden flex-row w-full justify-end items-center sm:flex'>
          <ul className='flex flex-row items-center'>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink link={link} />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

function NavLink({ link }) {
  return (
    <>
      <Link
        to={link.url}
        className='block px-4 py-2 text-white hover:text-slate-200 font-medium text-lg'
      >
        {link.title}
      </Link>
    </>
  );
}
