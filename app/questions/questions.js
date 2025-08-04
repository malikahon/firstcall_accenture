"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getFallbackPlan } from "../utils/fallbackPlan";

const questions = [
  { name: "1. What type of home do you live in?", answers: ["House", "Low-rise apartment", "High-rise apartment", "Mobile home"] },
  { name: "2. How many people live with you?", answers: ["1", "2", "3–4", "5+"] },
  { name: "3. Are there children under 12?", answers: ["Yes, 1", "Yes, 2+", "Sometimes", "No"] },
  { name: "4. Any elderly or mobility-impaired members?", answers: ["Elderly", "Mobility-impaired", "Both", "None"] },
  { name: "5. Is medical equipment needed at home?", answers: ["Daily", "Occasionally", "Not sure", "No"] },
  { name: "6. Any hearing, vision, or cognitive issues?", answers: ["Hearing", "Vision", "Cognitive", "None"] },
  { name: "7. Do you have animals needing evacuation?", answers: ["Pets", "Service animal", "Both", "None"] },
  { name: "8. Is daily medication used?", answers: ["Yes, refrigerated", "Yes, regular", "Occasionally", "No"] },
  { name: "9. How would you evacuate?", answers: ["Own car", "Ride from others", "Public transport", "No transport"] },
  { name: "10. How well do you understand emergency instructions?", answers: ["Very well", "Fairly well", "A little", "Not at all"] },
  { name: "11. Do you have a go-bag or kit ready?", answers: ["Fully packed", "Partially packed", "Plan to prepare", "None"] },
];

export default function Questionnaire({ onFinalStepChange }) {
  const [index, setIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [finalStep, setFinalStep] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Notify parent on first mount that we're not in final step
  useEffect(() => {
    onFinalStepChange?.(false);
  }, []);

  // Notify parent whenever finalStep state changes
  useEffect(() => {
    onFinalStepChange?.(finalStep);
  }, [finalStep]);

  const handleAnswer = (answer) => {
    const next = index + 1;
    setResponses((prev) => [...prev, answer]);
    if (next < questions.length) {
      setIndex(next);
    } else {
      setFinalStep(true);
    }
  };

  const handleDisasterSelect = async (type) => {
    setLoading(true);
    const payload = {
      answers: responses,
      selectedDisaster: type,
    };

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 2000);

      const res = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        if (res.status === 429 || error?.code === "insufficient_quota") {
          throw new Error("Quota or access issue");
        }
        throw new Error("API failed");
      }

      const data = await res.json();

      if (data?.plan) {
        const encoded = encodeURIComponent(data.plan);
        router.push(`/results?plan=${encoded}`);
      } else {
        throw new Error("Empty plan received");
      }
    } catch (err) {
      console.warn("⚠️ Fallback triggered:", err.message);
      const fallback = getFallbackPlan(payload);
      const encodedPlan = encodeURIComponent(fallback);
      const encodedData = encodeURIComponent(JSON.stringify(payload));
      router.push(`/results?plan=${encodedPlan}&data=${encodedData}`);
    } finally {
      setLoading(false);
    }
  };

  if (finalStep) {
    return (
      <div className="container">
        <div className="disasters">
          <div className="disaster-card wildfire" onClick={() => handleDisasterSelect("Wildfire")}>
            <img className="icon" src="/FireIcon.png" alt="Wildfire" />
            <p>WILDFIRE</p>
          </div>
          <div className="disaster-card flood" onClick={() => handleDisasterSelect("Flood")}>
            <img className="icon" src="/FloodIcon.png" alt="Flood" />
            <p>FLOOD</p>
          </div>
          <div className="disaster-card storm" onClick={() => handleDisasterSelect("Storm")}>
            <img className="icon" src="/StormIcon.png" alt="Storm" />
            <p>STORM</p>
          </div>
          <div className="disaster-card earthquake" onClick={() => handleDisasterSelect("Earthquake")}>
            <img className="icon" src="/EarthquakeIcon.png" alt="Earthquake" />
            <p>EARTHQUAKE</p>
          </div>
        </div>

        <div className="nav-buttons">
          <button className="nav-btn" onClick={() => handleDisasterSelect("Preparation")}>
            PREPARATION
          </button>
        </div>

        {loading && <p>Generating your emergency plan...</p>}
      </div>
    );
  }

  return (
    <section className="questionnaire-slide active-question">
      <h2 className="questionnaire-question-text">{questions[index].name}</h2>
      {questions[index].answers.map((a, i) => (
        <button key={i} className="questionnaire-option" onClick={() => handleAnswer(a)}>
          {a}
        </button>
      ))}
    </section>
  );
}
