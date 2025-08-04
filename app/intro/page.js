"use client";
import { useState } from "react";
import Questionnaire from "./questions";

const ThisFunc = () => {
  const [finalStep, setFinalStep] = useState(false); // controls bear visibility

  return (
    <div className="AppContainer">
      {/* Top section: Logo + Mascot */}
      <div className="questionnaire-top">
        <img className="questionnaire-logo" src="/MainIcon.png" alt="Logo" />

        {/* 🧸 Mascot image is hidden during disaster step */}
        {!finalStep && (
          <div className="questionnaire-mascot-wrapper">
            <img
              className="questionnaire-mascot"
              src="GrantQuestion.png"
              alt="Bear writing with bird"
            />
          </div>
        )}

        <div className="questionnaire-icon-area">
          <img className="questionnaire-icon" src="Q-icon.png" alt="Question Icon" />
        </div>
        <hr className="questionnaire-divider" />
      </div>

      {/* Questionnaire Component */}
      <div className="questionnaire-slider">
        <Questionnaire onFinalStepChange={setFinalStep} />
      </div>
    </div>
  );
};

export default ThisFunc;
