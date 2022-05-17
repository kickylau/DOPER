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

import Walkers from '../Walker';


const NavBar = () => {
  const user = useSelector(state => state.session.user);

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <ul className="logged-in-nav">
        <li className="nav button4">
          <AboutButton />
        </li>
        {/* <li className="nav button1">
          <CreatePetModal/>
        </li> */}

        <li className="nav button2">
          <NavLink to="/Home" exact={true} className="home">
            Home
          </NavLink>
        </li>
        <li className="nav button2">
          <NavLink to="/reservations" exact={true} className="reservations">
            Reservations
          </NavLink>
        </li>
        <li className="nav button2">
          <NavLink to="/pets" exact={true} className="pets">
            Pet Profile
          </NavLink>
        </li>

        <li className="nav button3">
          <ProfileButton/>
        </li>
      </ul>
    );
  } else {
    sessionLinks = (
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
          <SignUpFormModal/>
        </li>
      </ul>
    );
  }


  return (
    <nav className="nav-container">
        <ul className="nav-bar-left">
        <li className="nav-list">
          <NavLink to='/Home' exact={true} className="nav-link">
            <img src="/static/doper.png" className="icon" alt="Doper Icon" />
            <h1 className="doper">Doper</h1>
          </NavLink>
        </li>
      </ul>


      <ul className="nav-bar-right">
        <li>{sessionLinks}</li>
      </ul>
    </nav>
    //    <ul className="nav-bar-left">
    //<li className="nav-list">
    //<NavLink to='/' exact={true} className="nav-link">
      //{/* <img src="/static/icon.png" className="icon" alt="Travel Bucket Icon" /> */}
     // <h2 id="travel">Home</h2>
   // </NavLink>
  //</li>
//</ul>





    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink to='/home' exact={true} activeClassName='active'>
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/login' exact={true} activeClassName='active'>
    //         Login
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/sign-up' exact={true} activeClassName='active'>
    //         Sign Up
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/users' exact={true} activeClassName='active'>
    //         Users
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/pets' exact={true} activeClassName='active'>
    //         Pets
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/reservations' exact={true} activeClassName='active'>
    //         Your Reservations
    //       </NavLink>
    //     </li>
    //     <li>
    //       <LogoutButton />
    //     </li>
    //     <li >
    //       <CreatePetModal />
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default NavBar;
