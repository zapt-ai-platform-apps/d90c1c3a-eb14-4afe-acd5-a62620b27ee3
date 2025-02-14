import React, { useState, useEffect, useCallback } from 'react';
import { TimerDisplay, ButtonMagic, DownloadPrompt } from './components.jsx';
import { saveProgress } from './api.js';

export default function App() {
  const [points, setPoints] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(100);
  const [phase, setPhase] = useState(1);
  const [showReward, setShowReward] = useState(false);

  const calculateNewTimer = (currentPhase) => {
    return Math.max(30, 100 - (currentPhase - 1) * 5);
  };

  useEffect(() => {
    console.log('Iniciando contagem regressiva');
    const timerInterval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev > 0) return prev - 1;
        return 0;
      });
    }, 1000);
    return () => clearInterval(timerInterval);
  }, [phase]);

  const handleMagicClick = useCallback(async () => {
    console.log('Botão mágico clicado');
    const pointsToAdd = timeRemaining > 0 ? 10 : 9;
    setPoints((prev) => {
      const newTotal = prev + pointsToAdd;
      console.log(`Pontos adicionados: ${pointsToAdd}. Total acumulado: ${newTotal}`);
      if (newTotal >= 101) {
        console.log('Limite de pontos atingido, fase concluída.');
        setShowReward(true);
      }
      return newTotal;
    });
  }, [timeRemaining]);

  useEffect(() => {
    if (showReward) {
      alert('Parabéns! Você ganhou o nome do serviço e wpoints!');
      console.log('Persistindo progresso da fase:', phase, 'com pontos:', points);
      saveProgress(phase, points)
        .then((res) => console.log('Progresso salvo com sucesso:', res))
        .catch((error) => {
          console.error('Erro ao salvar progresso:', error);
        });
      const nextPhase = phase + 1;
      setPhase(nextPhase);
      setPoints(0);
      setTimeRemaining(calculateNewTimer(nextPhase));
      setShowReward(false);
      console.log('Avançando para a fase:', nextPhase);
    }
  }, [showReward, phase, points]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <audio src="/background.mp3" autoPlay loop />
      <h1 className="text-3xl font-bold mb-4">Jogo Mágico</h1>
      <TimerDisplay timeRemaining={timeRemaining} />
      <ButtonMagic onClick={handleMagicClick} />
      <div className="mt-4">
        <p className="text-lg">Pontos: {points}</p>
        <p className="text-lg">Fase: {phase}ª fase</p>
      </div>
      <DownloadPrompt />
      <div className="fixed bottom-2 left-2 text-sm text-gray-600">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline">
          Made on ZAPT
        </a>
      </div>
    </div>
  );
}