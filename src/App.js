import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Nav from "./components/Nav/Nav";

//import styles
import "./index.css";

// pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

//routes will need to be reviewed and updated as pages are added
function App() {
  return (
    <Router>
    <>
      {/* placeholder for when Nav is ready */}
      {/* <Nav /> */}
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    </>
    </Router>
  );
}

export default App;