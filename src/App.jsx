import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Menu from "./components/Menu.jsx";
import Contact from "./components/Contact.jsx";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
                <div className="list">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </Router>
        </div>
    );
}

export default App;
