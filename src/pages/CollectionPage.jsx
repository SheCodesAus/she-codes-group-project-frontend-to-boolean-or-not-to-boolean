import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import WinWallCard from "../components/WinWallCard/WinWallCard"

function CollectionPage(props) {

  const [collectionList, setCollectionList] = useState();
  const { id } = useParams();

  useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}collection/${id}/`)
      .then((results) => {
      return results.json();
       })
      .then((data) => {
      setCollectionList(data);        
      });

  }, []);

  // If no win wall yet, then display this message:
    
  if (!collectionList) {
    
    return (
      <div>
        <h1>{collectionList.title} </h1>
        <h1>You don't have any win walls yet...</h1>
        
        <Link to={`/create-win-wall/`}>Create your first win wall!</Link>
        </div>
        )
};

// If win wall exists, then display them in a list:

  return (
   <h1>Under debugging</h1>
  // <div>
    // <div>
    //     <h1>{collectionList.title}</h1>
    //     <p>Browse {collectionList.title}’s latest digital win walls.</p> 
    // </div>
    
  //   <div className="winwall-card--list">
  //     {collectionList.map((winwallData, key) => {
  //     return<WinWallCard key={key} winwallData={winwallData}/>;            })}
  //   </div>
  // </div>
  )
  
}
      
export default CollectionPage;