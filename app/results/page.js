"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResultsPage() {
  const params = useSearchParams();
  const planText = params.get("plan");
  const [plan, setPlan] = useState("");

  useEffect(() => {
    if (planText) {
      setPlan(decodeURIComponent(planText));
    }
  }, [planText]);

  const getIcon = (text) => {
    if (text.includes("WILDFIRE")) return "/FireIcon.png";
    if (text.includes("FLOOD")) return "/FloodIcon.png";
    if (text.includes("STORM")) return "/StormIcon.png";
    if (text.includes("EARTHQUAKE")) return "/EarthquakeIcon.png";
    return "/CheckIcon.png";
  };

  return (
    <div className="results-wrapper">
      <div className="results-box">
        <div className="results-header">
          <img
            src={getIcon(plan)}
            alt="Disaster Icon"
            className="results-icon"
          />
          <h1 className="results-title">Your Emergency Plan</h1>
        </div>

        <p className="results-text">
          {plan || "No plan data found."}
        </p>

        <div className="results-footer">
          <a
            href="/"
            className="results-restart"
          >
            Start Over
          </a>
        </div>
      </div>
    </div>
  );
}
