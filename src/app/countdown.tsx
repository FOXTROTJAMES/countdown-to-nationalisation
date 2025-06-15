/// components/CountdownOperators.tsx
"use client";
import React, { useState, useEffect } from "react";
import { TrainOperator, getPendingOperators } from "./train-operators";

interface CountdownTime {
  expired: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownOperators: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const pendingOperators = getPendingOperators();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculateCountdown = (dateString: string): CountdownTime => {
    const targetDate = new Date(dateString);
    const now = currentTime;
    const diffTime = targetDate.getTime() - now.getTime();

    if (diffTime <= 0) {
      return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    return { expired: false, days, hours, minutes, seconds };
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Sort operators by scheduled date
  const sortedOperators: TrainOperator[] = [...pendingOperators].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 m-4">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
        <span className="mr-3">⏰</span>
        Awaiting Nationalization ({pendingOperators.length})
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedOperators.map((operator: TrainOperator, index: number) => {
          const countdown = calculateCountdown(operator.date);

          return (
            <div
              key={index}
              className={`border rounded-lg p-4 shadow-sm hover:shadow-md transition-all ${
                countdown.expired
                  ? "bg-green-100 border-green-300"
                  : countdown.days <= 30
                  ? "bg-orange-100 border-orange-300"
                  : "bg-white border-blue-300"
              }`}
            >
              <h3 className="font-semibold text-lg text-center text-gray-900 mb-2">
                {operator.name}
              </h3>

              <div className="text-o do this Ism text-center text-gray-600 space-y-1 mb-3">
                {/* <p><strong>Region:</strong> {operator.region}</p> */}
                <p>
                  <strong>Scheduled:</strong> {formatDate(operator.date)}
                </p>
              </div>

              <div
                className={`text-center p-3 rounded-md mb-3 ${
                  countdown.expired
                    ? "bg-green-200 text-green-800"
                    : countdown.days <= 7
                    ? "bg-red-100 text-red-800"
                    : countdown.days <= 30
                    ? "bg-orange-200 text-orange-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {countdown.expired ? (
                  <div className="font-bold">Ready for Nationalization!</div>
                ) : (
                  <div>
                    <div className="text-lg font-bold">
                      {countdown.days === 1
                        ? "1 day"
                        : `${countdown.days} days`}{" "}
                      remaining
                    </div>
                    <div className="text-xs opacity-75">
                      {countdown.days}d {countdown.hours}h {countdown.minutes}m{" "}
                      {countdown.seconds}s
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountdownOperators;
