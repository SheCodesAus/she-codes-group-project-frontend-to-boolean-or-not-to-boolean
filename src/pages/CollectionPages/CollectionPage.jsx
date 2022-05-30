import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import WinWallCard from "../../components/WinWallCard/WinWallCard"
import CreateWinWallCard from "../../components/WinWallCard/CreateWinWallCard";

function CollectionPage() {

  const [CollectionData, setCollectionData] = useState({win_wall_collections:[]});
  const { id } = useParams();

  useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}collection/${id}/`)
      .then((results) => {
      return results.json();
       })
        .then((data) => {
          setCollectionData(data);
      });

  }, []);

    // If no win wall yet, then display this message:

  if (!CollectionData.win_wall_collections) {
    return (
        <div>
        <h1>{CollectionData.title} </h1>
        <p>You don't have any win walls yet...</p>
        <CreateWinWallCard />
        </div>
        )
};

// If win wall exists, then display them in a list:

  return (

   <div>
      <div>
      <h1>{CollectionData.title}</h1>
      <p>Browse {CollectionData.title}' latest win walls.</p> 
      </div>
      
      <div className="winwall--list">
      {CollectionData.win_wall_collections.map((winwallData, key) => {
        return <WinWallCard key={key} winwallData={winwallData} />   })}
          <CreateWinWallCard />
        </div>


   </div>

  )
  
}
      
export default CollectionPage;