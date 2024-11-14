import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Contact from "./components/Contact.jsx";
function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<h1>Home Page</h1>} />
                    <Route exact path="contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
