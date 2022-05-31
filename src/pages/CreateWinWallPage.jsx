import React from "react";
import WinWallForm from "../components/WinWallForm/WinWallForm"
import "../pages/WinWallPage.css"




function CreateWinWallPage() {
    return (
    
        <div className="main-section">
            <h1>Create a new Win Wall</h1>
            <p className="main-section--description">
                Create a new win wall page to organise your sticky notes. </p>

            <WinWallForm />
        </div>
        
    )
}
export default CreateWinWallPage;