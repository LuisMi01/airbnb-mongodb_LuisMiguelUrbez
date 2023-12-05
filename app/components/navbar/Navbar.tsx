import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                imagen_airbnb
            </div>
            <div className="search">
                <input type="text" placeholder="Start your search" />
                busqueda
            </div>
            <div className="menu">
                <div className="menu-item">Become a host</div>
                <div className="menu-item">Help</div>
                <div className="menu-item">Sign up</div>
                <div className="menu-item">Log in</div>
            </div>
        </div>
    )
}


export default Navbar;