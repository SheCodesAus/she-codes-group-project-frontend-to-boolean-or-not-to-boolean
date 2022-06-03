import React from "react";
import { Link } from "react-router-dom";
import "../../components/CollectionCard/CollectionCard.css"


function WinWallCard(props) {
  
    const { winwallData } = props;

    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
    const Approver = window.localStorage.getItem("is_approver");
   
    const IsAdmin = (Admin == 'true');
    const IsApprover = (Approver == 'true');
    const IsSuperUser = (SuperUser == 'true');

    return (

    <div className="winwall-card">
      <Link to={`/win-wall/${winwallData.id}`}>
        <img src={winwallData.image} alt="winwallimage" />
        <h3>{winwallData.title}</h3>
        </Link>
        <button><Link to={`/win-wall/${winwallData.id}/`}>View Win Wall</Link></button>
        {(IsAdmin || IsSuperUser || IsApprover) &&<button><Link to={`/win-wall/${winwallData.id}/edit`}>Edit Win Wall</Link></button>}

    </div>
  );
}

export default WinWallCard;
