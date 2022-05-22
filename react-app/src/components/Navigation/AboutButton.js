import React, { useState, useEffect } from "react";
import { AboutModal } from "../../context/AboutModal";
import githublogo from "./githublogo.png";
import linkedinlogo from "./linkedin.png";
import './Navigation.css';

function AboutButton() {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);

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
            <button src={githublogo} className="about-me" onClick={() => setShowModal(true)}>
                About Me
            </button>
            {showModal && (
                <AboutModal onClose={() => setShowModal(false)}>
                    <div className="formContainer12">
                        <div className="github">
                            <a>Kicky Liu : </a>
                        </div>
                        <div className="github">

                            <a href="https://github.com/kickylau" target="_blank" rel="noreferrer noopener"> <img src={githublogo} alt="Github"  /></a>
                        </div>
                        <div className="github">
                            
                            <a href="https://www.linkedin.com/in/kickyliu/" target="_blank" rel="noreferrer noopener"><img src={linkedinlogo} alt="LinkedIn" /></a>
                        </div>

                    </div>
                </AboutModal>
            )}
        </>
    );
}

export default AboutButton;
