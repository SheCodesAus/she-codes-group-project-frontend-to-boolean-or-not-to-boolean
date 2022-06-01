import React from "react";
import CollectionForm from "../../components/CollectionForm/CollectionForm"
import "../../pages/WinWallPage.css"



function CreateCollectionPage() {
    return (
    
        <div className="main-section">
            <h1>Create a new collection</h1>
            <p className="main-section--description">
                Create a new collection page to organise your future win walls and sticky notes. </p>

            <CollectionForm />
    </div>
        
    )
}
export default CreateCollectionPage;