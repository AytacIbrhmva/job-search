import React, { useState } from "react";
import { Link } from "react-router-dom";
import {IoMdArrowDropdown} from 'react-icons/io';
import {HiOutlineBarsArrowDown, HiOutlineBarsArrowUp} from 'react-icons/hi2';

export default function Header () {

    const [openNav, setOpenNav] = useState(false);
    const toggle = () => {setOpenNav(!openNav)}

    return (
        <div className="header">
            
            <div className="container">
                <Link to='/' className="logo">
                    <img src="https://freesvg.org/img/AnimalSilhouettes2-Penguin.png" alt="logo" />
                    Unemployed
                </Link>
                <nav className="desktop-nav">
                    <ul>
                        <li>
                            <Link to='/' className="active">Find Job</Link>
                        </li>
                        <li>
                            <Link to="/">Companies</Link>
                        </li>                  
                        <li>
                            <Link to="/">Add Job</Link>
                        </li>
                    </ul>
                </nav>
                <HiOutlineBarsArrowDown onClick={toggle} className={openNav ? "d-none" : "open-nav-icon"} />
                <HiOutlineBarsArrowUp onClick={toggle} className={openNav ? "close-nav-icon" : "d-none"} />
                <div className={openNav ? "t-1 mobile" : "t-0 mobile"}>
                    <nav className="mobile-nav">
                        <ul>
                            <li>
                                <Link to='/' className="active">Find Job</Link>
                            </li>
                            <li>
                                <Link to="/">Companies</Link>
                            </li>                  
                            <li>
                                <Link to="/">Add Job</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}