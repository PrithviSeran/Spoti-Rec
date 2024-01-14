import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'
import React, {Component} from "react";
import {Link} from 'react-router-dom';




function Navbar(){
    return (
        <>
        <nav className="bar">
            <h1>SpotiRec  <FontAwesomeIcon icon={faHeadphones}/></h1>
            <ul>
                <li className="list-elements"><Link to="/">Home</Link></li>
                <li className="list-elements"><Link to="/info">Info</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;