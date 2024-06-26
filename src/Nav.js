import React, { useEffect, useState } from 'react'
import './Nav.css'
import { useHistory } from 'react-router-dom';

function Nav() {
    const [show, handleShow] = useState(false);

    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => {
            window.removeEventListener('scroll', transitionNavBar);
        }
    }, []);


  return (
    <div className={`nav ${show && 'nav_black'}`}>
    <div className="nav_content">
         <img onClick={() => history.push("/")} className='nav_logo' src="https://fbi.cults3d.com/uploaders/27512146/illustration-file/4cd53c3b-bd3c-4cf1-999e-e9160186fbd0/Netflix-logo.png" alt="" />
        <img onClick={() => history.push("/profile")} className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
    </div>
    </div>
  )
}

export default Nav
