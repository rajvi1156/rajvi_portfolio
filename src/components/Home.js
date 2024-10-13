import React from 'react';
import myPhoto from './photo/profile.jpeg'; // Adjust the path based on where you saved your photo

const Home = () => {
    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <img src={myPhoto} alt="My Portrait" style={{ width: '200px', borderRadius: '50%' }} />
            <p>Hello! I'm Rajvi Soneji, a Frontend Web Developer.</p>
            <h3>Summary </h3>
            <p> Motivated and detail-oriented Frontend Web Developer with a solid foundation in HTML, CSS, JavaScript, and React.js. Experienced in building responsive and dynamic web applications through personal projects and coursework. Seeking an opportunity to apply my skills and grow in a dynamic team environment.</p>
            
        </div>
    );
};

export default Home;
