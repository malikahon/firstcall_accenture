"use client";
import Questions from "./questions";
import { useState } from "react";

const ThisFunc = () => {
  const [finalStep, setFinalStep] = useState(false); // comes from child

  return (
    <div className="AppContainer">
      <div className="questionnaire-top">
        <img className="questionnaire-logo" src="/MainIcon.png" alt="Logo" />

        {/* Bear is hidden on final step (disaster selection) */}
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

      <div className="questionnaire-slider">
        <Questions onFinalStepChange={setFinalStep} />
      </div>
    </div>
  );
};

export default ThisFunc;
