import React from 'react';
import useGame from './hooks/useGame';
import DownloadPrompt from './components/DownloadPrompt';

export default function App() {
  const { points, timer, phase, bonusMessage, isAnimating, isSaving, handleClick, showDownloadPrompt, setShowDownloadPrompt } = useGame();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center">
      <audio src="/background-music.mp3" autoPlay loop />
      <h1 className="text-3xl font-bold mb-4">Jogo Clicker Mágico</h1>
      <div className="mb-4">
        <p className="text-xl">Fase: {phase}</p>
        <p className="text-xl">Pontuação: {points}</p>
        <p className="text-xl">Tempo Restante: {timer} s</p>
      </div>
      {bonusMessage && (
        <div className="mb-4 p-4 bg-green-200 text-green-800 rounded">
          {bonusMessage}
        </div>
      )}
      <button 
        className={`px-6 py-3 bg-blue-600 text-white rounded cursor-pointer ${isAnimating ? 'magic-animation' : ''}`}
        onClick={handleClick}
        disabled={isSaving}
      >
        Clique Mágico
      </button>
      {showDownloadPrompt && <DownloadPrompt onDismiss={() => setShowDownloadPrompt(false)} />}
      <footer className="absolute bottom-2 right-2">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 cursor-pointer">
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}