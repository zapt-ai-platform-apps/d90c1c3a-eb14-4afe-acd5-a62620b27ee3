import React from 'react';

const TimerDisplay = ({ timeRemaining }) => {
  return (
    <div className="mb-4">
      <p className="text-xl font-medium">Tempo restante: {timeRemaining} segundos</p>
    </div>
  );
};

export default TimerDisplay;