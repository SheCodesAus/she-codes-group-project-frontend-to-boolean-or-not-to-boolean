import React, { useEffect, useState } from "react";

// Components
import LiveWinWallCard from "../../components/LiveWinWallCard/LiveWinWallCard";

function LiveWinWallsPage() {

    // States
    const [liveWinWallsList, setLiveWinWallsList] = useState([]);

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

    return (
        <div className="winwall-list-wrapper">
            <div id="intro-text">
                <h1>View Live Win Walls!</h1>
                <h2>Check out what other people are saying!</h2>
            </div>

            <div className="coder-list">
                {liveWinWallsList.map((winwallData, key) => {
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