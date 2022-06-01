import React from "react";
import { Link, useParams } from "react-router-dom";
import WinWallForm from "../components/WinWallForm/WinWallForm"
import "../pages/WinWallPage.css"
import "../components/CollectionCard/CollectionCard.css"


function CreateWinWallPage() {

    const { id } = useParams();
    return (
    
        <div className="main-section">
            <h1>Create a new Win Wall</h1>
            <p className="main-section--description">
                Create a new win wall page to organise your sticky notes. </p>

            <WinWallForm collectionId={id}/>
        </div>
        
    )
}
export default CreateWinWallPage;