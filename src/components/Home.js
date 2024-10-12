import React from 'react';
import myPhoto from './photo/profile.jpeg'; // Adjust the path based on where you saved your photo

const Home = () => {
    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <img src={myPhoto} alt="My Portrait" style={{ width: '200px', borderRadius: '50%' }} />
            <p>Hello! I'm Rajvi Soneji, a Frontend Web Developer.</p>
        </div>
    );
};

export default Home;
