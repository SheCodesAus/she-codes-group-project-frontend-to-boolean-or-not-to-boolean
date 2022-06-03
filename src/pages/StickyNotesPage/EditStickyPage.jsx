import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import EditStickyNoteForm from "../../components/EditStickyNoteForm/EditStickyForm"


function EditStickyPage() {

    const token = window.localStorage.getItem("token");
    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
    const Approver = window.localStorage.getItem("is_approver");
   
    const isAdmin = (Admin == 'true')
    const isApprover = (Approver == 'true')
    const isSuperUser = (SuperUser == 'true')

    const assignmentsString = window.localStorage.getItem("assignments");
    const assignments = assignmentsString ? JSON.parse(assignmentsString) : [];
   
    
    
    const [stickynote, setStickynote] = useState();
    const [WinwallData, setWinwallData] = useState();
    const { id } = useParams();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}sticky-note/${id}/`)
        .then((results) => {
            console.log("results",results);    
        return results.json();
        })
        
        .then((data) => {
            setStickynote(data);
            console.log("data",data);
        
            fetch(`${process.env.REACT_APP_API_URL}win-wall/${data.win_wall_id}/`)
             .then((results) => {
                return results.json();
             })
            .then((data) => {
                setWinwallData(data);
                console.log("data", data);
            })
        });

    }, []);


     if (!WinwallData) {
         return <h3>Loading..</h3>;
     }

     const WallStatus = WinwallData.is_open
     const WallClosed = WallStatus == false
     const WallLive = WallStatus == true
 
    if (WallLive & isAdmin || isApprover || isSuperUser) {
    return (
        <div>
        <div>
            <h1>Win wall Title:  {WinwallData.title} </h1>
           
        </div>
        <div>
             <EditStickyNoteForm win_wallId={id}/>
        </div>

        </div>
       
    
    );}

    else  if (WallClosed & isAdmin || isApprover || isSuperUser) {
        return (
            <div>
            <div>
                <h1>Win wall Title:  {WinwallData.title} </h1>
               
            </div>
            <div>
                 <EditStickyNoteForm win_wallId={id}/>
            </div>
    
            </div>
           
        
        );}

     else  if (WallClosed & !isAdmin || !isApprover || !isSuperUser) {
        return (
            <div>
                <h2>Win Wall is now Closed</h2>
            </div>
           
        
        );}
    else {
        return (
            <div>
                <h2>Win Wall is now Closed</h2>
            </div>
        );}
    }


export default EditStickyPage;