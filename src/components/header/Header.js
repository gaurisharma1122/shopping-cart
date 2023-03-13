import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import "./Header.css";

const Header = () => {

  const { cart }= useGlobalContext();

  return (
    <nav className='header'>
      <h1>E-Shop</h1>
      <ul className="navbar">
        <li>
            <Link to='/'> Home </Link>
        </li>
        <li>
            <Link to='/cart'> 
              <i className="fa-solid fa-cart-shopping"></i>
              <span> {cart.length} </span>
            </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;
