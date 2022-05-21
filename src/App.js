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
import SignUpPage from "./pages/SignUpPage";
import CreateStickyPage from "./pages/CreateStickyPage";

//routes will need to be reviewed and updated as pages are added
function App() {
  return (
    <Router>
    <>
      <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-win-wall/" element={<CreateWinWallPage />} />
          <Route path="/win-wall/:id/" element={<WinWallPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/create-sticky-note/win-wall/:id/" element={<CreateStickyPage />} />

        </Routes>
    </>
    </Router>
  );
}

export default App;