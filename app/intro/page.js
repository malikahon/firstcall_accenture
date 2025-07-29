"use client"

const ThisFunc=() => {


    const textOutput=()=>{
        console.log("printed");
        // prompt("Printed");
    }



    return(
        <div class="AppContainer">
    
            {/* /* /* // INTRO PAGE */

            //  <div class="intro-container">
            //     <div class="intro-logo">
            //         <img src="/MainIcon.png" alt="Logo"/>
            //         <h1>First<span>CA</span>ll</h1>
            //     </div>
            //     <div class="mascot-image">
            //         <img src="/IntroGrant.png" alt="Bear Mascot"/>
            //     </div>
            //     <button class="get-started">GET STARTED</button>
            //  </div> */

            /* // Questionnaire */}

            {/* <div class="questionnaire-container">
                <div class="questionnaire-top">
                    <img class="questionnaire-logo" src="/MainIcon.png" alt="Logo"/>
                    <div class="questionnaire-mascot-wrapper">
                        <img class="questionnaire-mascot" src="GrantQuestion.png" alt="Bear writing with bird"/>
                    </div>
                    <div class="questionnaire-icon-area">
                        <img class="questionnaire-icon" src="Q-icon.png" alt="Question Icon"/>
                    </div>
                    <hr class="questionnaire-divider" />
                </div>

                <div class="questionnaire-slider">
                    <section class="questionnaire-slide active-question">
                    <h2 class="questionnaire-question-text">10. How well do you understand emergency instructions?</h2>
                    <button class="questionnaire-option">Very well</button>
                    <button class="questionnaire-option">Fairly well</button>
                    <button class="questionnaire-option">A little</button>
                    <button class="questionnaire-option">Not at all</button>
                    </section>
                </div>
            </div> */}
        
 
             {/* /* // HOME PAGE  */}

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

                {/* FLOOD */}

            {/* <div class="flood-screen">
                <div class="flood-top">
                    <img class="flood-bear-logo" src="/MainIcon.png" alt="Bear Logo" />
                    <img class="flood-wave-icon" src="/FloodIcon.png" alt="Wave Icon" />
                    <h1 class="flood-title">FLOOD</h1>
                    <hr class="flood-divider" />
                </div>
                <ol class="flood-steps">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                </ol>
            </div> */}

        </div>
    )


}

export default ThisFunc