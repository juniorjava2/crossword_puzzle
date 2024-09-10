// src/components/Timer.tsx

import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa'; // Importing icons

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [inputTime, setInputTime] = useState<string>('');

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsRunning(false);
      alert("Time's up!");
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStartPauseContinue = () => {
    if (isRunning) {
      handlePause();
    } else if (isPaused) {
      handleContinue();
    } else {
      handleStart();
    }
  };

  const handleStart = () => {
    const time = parseInt(inputTime);
    if (!isNaN(time) && time > 0) {
      setTimeLeft(time);
      setIsRunning(true);
      setIsPaused(false);
      setInputTime('');
    }
  };

  const handlePause = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const handleContinue = () => {
    if (isPaused) {
      setIsRunning(true);
      setIsPaused(false);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTimeLeft(0);
    setInputTime('');
  };

  const formatTime = (seconds: number) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <div className="absolute z-10 right-8 top-4 flex flex-col items-center flex-1 justify-center text-black mx-4 bg-gray-100 p-8 rounded-full  shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{formatTime(timeLeft)}</h1>
      <input
        type="number"
        value={inputTime}
        onChange={(e) => setInputTime(e.target.value)}
        placeholder="Set time in seconds"
        className="border border-gray-300 rounded p-1 w-36 text-sm"
      />
      <div className="flex space-x-4">
        <button
          onClick={handleStartPauseContinue}
          className={`bg-blue-500 text-white flex items-center justify-center rounded w-8 h-8 ${
            isRunning || isPaused ? 'bg-yellow-500' : 'bg-blue-500'
          }`}
        >
          {isRunning ? (
            <FaPause size={15} />
          ) : isPaused ? (
            <FaPlay size={15} />
          ) : (
            <FaPlay size={15} />
          )}
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 text-white flex items-center justify-center rounded w-8 h-8"
        >
          <FaRedo size={15} />
        </button>
      </div>
    </div>
  );
};

export default Timer;
