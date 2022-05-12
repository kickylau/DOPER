
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import BookReservationModal from '../BookReservationModal';
import CreatePetModal from '../CreatePetModal';
import Walkers from '../Walker';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to='/pets' exact={true} activeClassName='active'>
            Pets
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
        <li >
          <BookReservationModal />
        </li>
        <li >
          <CreatePetModal />
        </li>

        <li>

            <Walkers />

        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
