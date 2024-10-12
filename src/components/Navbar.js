import React from 'react';

const Navbar = ({ setView }) => {
    return (
        <nav>
            <ul style={{color:'white'}}>
                <li onClick={() => setView('home')}>Home</li>
                <li onClick={() => setView('projects')}>Projects</li>
                <li onClick={() => setView('about')}>About</li>
                <li onClick={() => setView('contact')}>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
