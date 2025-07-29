"use client"
import Questions from "./questions"  
import { useState } from "react"
const ThisFunc=() => {
    const questions = [
        {
            name: "question one", 
            answers: [
               "answer one",
               "answer two",
               "answer three",
               "answer four"
            ]
        }, {
            name: "question two", 
            answers: [
               "answer one",
               "answer two",
               "answer three",
               "answer four"
            ]
        }
    ]

    
const [index, setIndex]=useState(0)

const [  responses, setResponses]=useState([])

    return(
        <div className="AppContainer">
    

            <div className="questionnaire-container">
                <div className="questionnaire-top">
                    <img className="questionnaire-logo" src="/MainIcon.png" alt="Logo"/>
                    <div className="questionnaire-mascot-wrapper">
                        <img className="questionnaire-mascot" src="GrantQuestion.png" alt="Bear writing with bird"/>
                    </div>
                    <div className="questionnaire-icon-area">
                        <img className="questionnaire-icon" src="Q-icon.png" alt="Question Icon"/>
                    </div>
                    <hr className="questionnaire-divider" />
                </div>

                <div className="questionnaire-slider">
                    <Questions name= {questions[index].name} answers={ questions[index].answers} setIndex={setIndex} index={ index} responses={responses} setResponses={setResponses}/>
                </div>
            </div>
        
        </div>
    )


}

export default ThisFunc