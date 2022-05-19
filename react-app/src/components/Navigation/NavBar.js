import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import DemoButton from '../auth/DemoButton';
import LoginFormModal from '../LoginFormModal';
import ProfileButton from './ProfileButton';
import AboutButton from './AboutButton';
import SignUpFormModal from '../SignUpModal';
import CreatePetModal from '../CreatePetModal';
import BookReservationModal from '../BookReservationModal';
import { SiDatadog } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import Walkers from '../Walker';


const NavBar = () => {
  const user = useSelector(state => state.session.user);

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <header>
        <ul className="logged-in-nav">
          <li className="nav button4">
            <AboutButton />
          </li>
          <li className="nav">
            <NavLink to="/reservations" exact={true} id="buttonbutton">
              Reservations
            </NavLink>
          </li>
          <li className="nav">
            <NavLink to="/pets" exact={true} id="buttonbutton">
              Your Pets
            </NavLink>
          </li>

          <li className="nav button3">
            <ProfileButton />
          </li>
        </ul>
      </header>
    );
  } else {
    sessionLinks = (
      <header>
        <ul className="logged-out-nav">
          <li className="nav button4">
            <AboutButton />
          </li>
          <li className="nav button1">
            <DemoButton />
          </li>
          <li className="nav button2">
            <LoginFormModal />
          </li>
          <li className="nav button3">
            <SignUpFormModal />
          </li>
        </ul>
      </header>
    );
  }


  return (
    <nav className="nav-container">
      <ul className="nav-bar-left">
        <li className="nav-list">
          <NavLink to='/Home' exact={true} className="nav-link">
            <img src="/static/doper.png" className="icon" alt="Doper Icon" />
            <a className="doper">Doper</a>
          </NavLink>
        </li>
      </ul>


      <ul className="nav-bar-right">
        <li>{sessionLinks}</li>
      </ul>
    </nav>


  );
}

export default NavBar;
