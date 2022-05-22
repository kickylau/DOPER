import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from "react-router-dom";
import './Navigation.css'
import LogoutButton from "../auth/LogoutButton";
import { ProfileModal } from "../../context/ProfileModal";
import * as petActions from "../../store/pet";


function ProfileButton() {
    const user = useSelector(state => state.session.user);
    const petsObj = useSelector(state => state.pets)
    const pets = Object.values(petsObj)
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        dispatch(petActions.loadAllPets())
    }, [dispatch])


    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);



    return (
        <>
            <button className="User-Profile" onClick={() => setShowModal(true)}>
                User Profile
            </button>
            {showModal && (
                <ProfileModal onClose={() => setShowModal(false)}>
                    <div className="formContainer11">
                        <ul className="profile-dropdown">
                            <li className="dropdown-list">
                                <strong>Userid</strong> {user.id}
                            </li>
                            <li className="dropdown-list">
                                <strong>Username</strong> {user.username}
                            </li>
                            <li className="dropdown-list">
                                <strong>Email</strong> {user.email}
                            </li>
                            <li className="logout">
                                <LogoutButton/>
                            </li>
                        </ul>
                    </div>
                </ProfileModal>
            )}
        </>
    );
}

export default ProfileButton;
