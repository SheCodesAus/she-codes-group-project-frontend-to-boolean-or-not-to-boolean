import React from "react";
import { BrowserRouter as Router, Routes, Route,  Switch, BrowserRouter } from "react-router-dom";

//components
import Nav from "./components/Nav/Nav";

//import styles
import "./index.css";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CollectionPage from "./pages/CollectionPage"
import CollectionListPage from "./pages/CollectionListPage"
import WinWallPage from "./pages/WinWallPage"
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EditProfilePage from "./pages/ProfilePage/EditProfilePage";
import PageNotFound from "./pages/ErrorPage/PageNotFound";

// Admin Specific Pages:
import CreateCollectionPage from "./pages/CreateCollectionPage"
import EditCollectionPage from "./pages/EditCollectionPage";
import CreateWinWallPage from "./pages/CreateWinWallPage"
import CreateStickyPage from "./pages/StickyNotesPage/CreateStickyPage";
import EditStickyPage from "./pages/StickyNotesPage/EditStickyPage";
import UpdateUserAuthListPage from "./pages/AuthTypePages/UpdateUserAuthListPage";
import ChangeUserToAdminPage from "./pages/AuthTypePages/ChangeUserToAdminPage";
import ChangeUserToApproverPage from "./pages/AuthTypePages/ChangeUserToApprover";

function App() {
  return (
    <Router>
    <>
      <Nav />
        <Routes>
          {/* Any User Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/win-wall/:id/" element={<WinWallPage />} />
          <Route path="/collections/" element={<CollectionListPage />} />
          <Route path="/collection/:id" element={<CollectionPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/profile/:id/edit-profile" element={<EditProfilePage />} />

          {/* Admin Specific Pages: */}
          <Route path="/create-collection/" element={<CreateCollectionPage />} />
          <Route path="/collection/:id/edit" element={<EditCollectionPage />} />
          <Route path="/create-win-wall/" element={<CreateWinWallPage />} />
          <Route path="/create-sticky-note/win-wall/:id/" element={<CreateStickyPage />} />
          <Route path="/edit-sticky-note/win-wall/:id/" element={<EditStickyPage />} />
          <Route path="/profile/:id/add-auth-level/" element={<ChangeUserToAdminPage />} />
          <Route path="/profile/:id/make-approver/" element={<ChangeUserToApproverPage />} />
          <Route path="/shecodes-user-list/" element={<UpdateUserAuthListPage />} />

        </Routes>
    </>
    </Router>
  );
}

export default App;