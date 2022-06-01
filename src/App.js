import React from "react";
import { BrowserRouter as Router, Routes, Route,  Switch, BrowserRouter } from "react-router-dom";

//components
import Nav from "./components/Nav/Nav";

//import styles
import "./index.css";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CollectionPage from "./pages/CollectionPages/CollectionPage"
import CollectionListPage from "./pages/CollectionPages/CollectionListPage"
import WinWallPage from "./pages/WinWallPage"
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EditProfilePage from "./pages/ProfilePage/EditProfilePage";
import PageNotFound from "./pages/ErrorPage/PageNotFound";
import EditWinWallPage from "./pages/EditWinWallPage";
import EditWinWallForm from "./components/EditWinWallForm/EditWinWallForm";


// Admin Specific Pages:
import CreateCollectionPage from "./pages/CollectionPages/CreateCollectionPage"
import EditCollectionPage from "./pages/CollectionPages/EditCollectionPage";
import CreateWinWallPage from "./pages/CreateWinWallPage"
import CreateStickyPage from "./pages/StickyNotesPage/CreateStickyPage";
import EditStickyPage from "./pages/StickyNotesPage/EditStickyPage";
import UpdateUserAuthListPage from "./pages/AuthTypePages/UpdateUserAuthListPage";
import ChangeUserToAdminPage from "./pages/AuthTypePages/ChangeUserToAdminPage";
import ChangeUserToApproverPage from "./pages/AuthTypePages/ChangeUserToApprover";
import SheCoderListPage from "./pages/SheCoderListPage/SheCoderListPage";

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
          <Route path="/win-wall/:id/edit" element={<EditWinWallPage />} />
          <Route path="/collections/" element={<CollectionListPage />} />
          <Route path="/collection/:id/" element={<CollectionPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/profile/:id/edit-profile" element={<EditProfilePage />} />

          {/* Admin Specific Pages: */}
          <Route path="/create-collection/" element={<CreateCollectionPage />} />
          <Route path="/collection/:id/edit" element={<EditCollectionPage />} />
          <Route path="/collection/:id/create-win-wall/" element={<CreateWinWallPage />} />
          <Route path="/create-sticky-note/win-wall/:id/" element={<CreateStickyPage />} />
          <Route path="/edit-sticky-note/win-wall/:id/" element={<EditStickyPage />} />
          <Route path="/profile/:id/add-auth-level/" element={<ChangeUserToAdminPage />} />
          <Route path="/profile/:id/make-approver/" element={<ChangeUserToApproverPage />} />
          <Route path="/auth-assignments/" element={<UpdateUserAuthListPage />} />
          <Route path="/shecodes-user-list/" element={<SheCoderListPage />} />
        </Routes>
    </>
    </Router>
  );
}

export default App;