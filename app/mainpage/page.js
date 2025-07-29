"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainPage() {
  const searchParams = useSearchParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const rawData = searchParams.get("data");
    if (rawData) {
      try {
        const parsed = JSON.parse(decodeURIComponent(rawData));
        setData(parsed);
      } catch (err) {
        console.error("Failed to parse data:", err);
      }
    }
  }, [searchParams]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>Selected Disaster: {data.selectedDisaster}</h1>
      <h2>Responses:</h2>
      <ul>
        {data.answers.map((answer, i) => (
          <li key={i}>{`Q${i + 1}: ${answer}`}</li>
        ))}
      </ul>
    </div>
  );
}
