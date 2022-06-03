import React from "react";
import { Link } from "react-router-dom";
import "../../components/CollectionCard/CollectionCard.css"


function WinWallCard(props) {
  
    const { winwallData } = props;


    // realised Jo only wanted approvers to be able to update sticky notes and not the walls or collection

    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
    // const Approver = window.localStorage.getItem("is_approver");
   
    const IsAdmin = (Admin == 'true');
    // const IsApprover = (Approver == 'true');
    const IsSuperUser = (SuperUser == 'true');

    const assignmentsString = window.localStorage.getItem("assignments");
    const assignments = assignmentsString ? JSON.parse(assignmentsString) : [];
   
    let isAssignedAdmin = false;
    // let isAssignedApprover = false;
 
    for (let index = 0; index < assignments.length; index++) {
      const element = assignments[index];

      const collection_assignment = element.collection_id
      const winwall_assignment = element.win_wall_id
      // const assigned_approver = element.is_approver
      const assigned_admin = element.is_admin

      
      isAssignedAdmin = isAssignedAdmin || (assigned_admin == true && (winwall_assignment == winwallData.id || collection_assignment == winwallData.collection_id ))
      // isAssignedApprover = isAssignedApprover || (assigned_approver == true && (winwall_assignment == winwallData.id || collection_assignment == winwallData.collection_id ))
    }

    return (

    <div className="winwall-card">
      <Link to={`/win-wall/${winwallData.id}`}>
        <img src={winwallData.image} alt="winwallimage" />
        <h3>{winwallData.title}</h3>
        </Link>
        <button><Link to={`/win-wall/${winwallData.id}/`}>View Win Wall</Link></button>
        {(IsAdmin || IsSuperUser  || isAssignedAdmin ) &&<button><Link to={`/win-wall/${winwallData.id}/edit`}>Edit Win Wall</Link></button>}

    </div>
  );
}

export default WinWallCard;
