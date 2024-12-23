import { useState, useEffect } from "react";

export const TimeCard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bento-card">
      <h2 className="text-lg text-gray-400 mb-4">Current Time in Delhi</h2>
      <p className="text-3xl font-bold font-mono">
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
};