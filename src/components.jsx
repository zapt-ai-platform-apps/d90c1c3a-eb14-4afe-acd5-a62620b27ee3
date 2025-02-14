import React from 'react';

export function TimerDisplay({ timeRemaining }) {
  return (
    <div className="mb-4">
      <p className="text-xl">Tempo restante: {timeRemaining} segundos</p>
    </div>
  );
}

export function ButtonMagic({ onClick }) {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Botão Mágico
    </button>
  );
}

export function DownloadPrompt() {
  return (
    <div className="mt-4">
      <a href="/download" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Baixar Progresso
      </a>
    </div>
  );
}