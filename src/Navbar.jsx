import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {

    const [show , setShow] = useState(false);

    return (
        <>
        <div className="container-fluid navbar-bg" >
            <div className='row'>
               <div className="col-10 mx-auto">

              
         <section className="navbar-bg mb-5">
                <nav className="navbar bg_color navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <NavLink exact className="navbar-brand" to="/">Global Web</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShow(!show)}>
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 mr-5">
                                <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link "  to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
           </section> 
           </div> 
            </div>
        </div>       
        </>
    )
}

export default Navbar;
