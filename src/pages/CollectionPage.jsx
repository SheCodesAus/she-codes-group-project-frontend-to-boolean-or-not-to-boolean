import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import WinWallCard from "../components/WinWallCard/WinWallCard"

function CollectionPage() {

  const [CollectionData, setCollectionData] = useState();
  const { id } = useParams();

  useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}collection/${id}/`)
      .then((results) => {
      return results.json();
       })
        .then((data) => {
          setCollectionData(data);
          console.log("data", data);
      });

  }, []);

  // if (!CollectionData) {
  //   return <h3>Loading..</h3>;


  // If no win wall yet, then display this message:
    
// if (!CollectionData) {
//   return (
//           <div>
//           <h1>{CollectionData.title}</h1>
//           <p>You don't have any win walls in this collection yet...</p>
//             <Link to={`/create-win-wall/`}>Create your first win wall!</Link>
//           </div>)}

// If win wall exists, then display them in a list:

return (
  
    <div>
      
  <div>
  <h1>Test</h1>
  <p>Browse {CollectionData.title} latest win walls.</p> 
  </div>
    
    {/* <div className="winwall-card--list">
      {CollectionData.map((winwallData, key) => {
      return<WinWallCard key={key} winwallData={winwallData}/>;            })}
    </div>
   */}
    </div>
  )
  
}
      
export default CollectionPage;