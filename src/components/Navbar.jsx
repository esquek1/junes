import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiCookingPotFill } from "react-icons/pi";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        JUNES <PiCookingPotFill />
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
