const ThisFunc=() => {
   

    return(
        <div class="container">
            <div class="logo">
                <img src="/MainIcon.png" alt="Bear Logo"/>
                <h1>Welcome</h1>
            </div>
            <div class="disasters">
                <div class="disaster-card wildfire">
                    <img class="icon" src="/FireIcon.png" alt="Wildfire"/>
                    <p>WILDFIRE</p>
                </div>
                <div class="disaster-card flood">
                    <img class="icon" src="/FloodIcon.png" alt="Flood"/>
                    <p>FLOOD</p>
                </div>
                <div class="disaster-card storm">
                    <img class="icon" src="/StormIcon.png" alt="Storm"/>
                    <p>STORM</p>
                </div>
                <div class="disaster-card earthquake">
                    <img class="icon" src="/EarthquakeIcon.png" alt="Earthquake"/>
            <p>EARTHQUAKE</p>
                </div>
            </div>
            <div class="nav-buttons">
                <button class="nav-btn">PREPARATION</button>
                <button class="nav-btn">RESCUE MAP</button>
            </div>
        </div> 
    )
}

export default ThisFunc