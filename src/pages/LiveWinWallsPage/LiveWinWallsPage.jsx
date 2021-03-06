import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// Styles
//styles
import "./LiveWinWallsPage.css"

// Components
import LiveWinWallCard from "../../components/LiveWinWallCard/LiveWinWallCard";

function LiveWinWallsPage() {

    // States
    const [liveWinWallsList, setLiveWinWallsList] = useState();

    // Action & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}win-walls/`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setLiveWinWallsList(data);
            });
    }, []);

    if (!liveWinWallsList) {
        return <h3>Loading Live Win Walls..</h3>;
    }

    function IsOpen(winwall) {return winwall.is_open};

    return (
        <div className="winwall-list-wrapper">
            <div className="intro-text">
                <h1>View Live &#123;<span>Win Walls</span>&#125;</h1>
                <h2>Check out what other people are currently saying!</h2>
            </div>

            <div className="live-winwall-list">
                {liveWinWallsList.filter(IsOpen).map((winwallData, key) => {
                    return <LiveWinWallCard
                        key={`/win-walls-${winwallData.id}`} 
                        winwallData={winwallData}
                    />;
                })}
            </div>
        </div>
        );
}


export default LiveWinWallsPage;