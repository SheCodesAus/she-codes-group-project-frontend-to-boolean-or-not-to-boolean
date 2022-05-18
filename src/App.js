import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Nav from "./components/Nav/Nav";

//import styles
import "./index.css";

// pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateWinWallPage from "./pages/CreateWinWallPage"
import WinWallPage from "./pages/WinWallPage"

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
          <Route path="/create-collection/" element={<CreateWinWallPage />} />
          <Route path="/win-walls/:id/" element={<WinWallPage />} />

        </Routes>
    </>
    </Router>
  );
}

export default App;