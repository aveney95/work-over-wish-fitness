// src/components/Navigation.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navigation">
            <div className="nav-container">
            <div>
                    <Link to="/"></Link>
                </div>
                <div className={`menu-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/">Home</Link>
                    <Link to="/all-exercises">All Exercises</Link>
                    <Link to="/body-part-selection">Body Part Selection</Link>
                    <Link to="/equipment-selection">Equipment Selection</Link>
                    <Link to="/muscle-selection">Muscle Selection</Link>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
