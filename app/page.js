"use client"

const ThisFunc=() => {


    const textOutput=()=>{
        console.log("printed");
        // prompt("Printed");
    }



    return(
        <div class="AppContainer">
    

              <div class="intro-container">
                 <div class="intro-logo">
                     <img src="/MainIcon.png" alt="Logo"/>
                     <h1>First<span>CA</span>ll</h1>
                 </div>
                 <div class="mascot-image">
                     <img src="/IntroGrant.png" alt="Bear Mascot"/>
                 </div>
                 <a href = "/questions"class="get-started">GET STARTED</a>
              </div> 

 
        
 

       

        </div>
    )


}

export default ThisFunc