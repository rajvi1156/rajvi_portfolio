import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';


import './App.css';

function App() {
    const [view, setView] = useState('home'); // Initial view is 'home'

    const renderView = () => {
        switch (view) {
            case 'home':
                return <Home />;
            case 'projects':
                return <Project />;
            case 'about':
                return <About />;
            case 'contact':
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="App">
            <Navbar setView={setView} />
            {renderView()}
        </div>
    );
}

export default App;
