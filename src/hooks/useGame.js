import { useState, useEffect } from 'react';
import { saveGameProgress } from '../api';
import * as Sentry from '@sentry/browser';

export default function useGame() {
  const [points, setPoints] = useState(0);
  const [timer, setTimer] = useState(100);
  const [phase, setPhase] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [bonusMessage, setBonusMessage] = useState('');
  const [showDownloadPrompt, setShowDownloadPrompt] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('downloadPromptDismissed');
    if (!dismissed) {
      setShowDownloadPrompt(true);
    }
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => {
          if (prev - 1 <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const completePhase = async (currentPoints) => {
    setIsSaving(true);
    console.log(`Salvando progresso: Fase ${phase}, Pontos ${currentPoints}`);
    try {
      await saveGameProgress(phase, currentPoints);
      console.log(`Progresso salvo para Fase ${phase}`);
    } catch (error) {
      Sentry.captureException(error);
      console.error('Erro ao salvar progresso:', error);
    } finally {
      setPhase(prev => prev + 1);
      setPoints(0);
      setTimer(100);
      setBonusMessage('');
      setIsSaving(false);
    }
  };

  const handleClick = async () => {
    if (isSaving) return;
    const increment = timer > 0 ? 10 : 9;
    const newPoints = points + increment;
    setPoints(newPoints);
    try {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    } catch (error) {
      Sentry.captureException(error);
      console.error('Erro na animação do botão:', error);
    }
    if (newPoints >= 101) {
      setBonusMessage('Parabéns! Você venceu! Prêmio: Serviço ZAPT e bônus: 50 wpoints.');
      await completePhase(newPoints);
    }
  };

  return {
    points,
    timer,
    phase,
    bonusMessage,
    isAnimating,
    isSaving,
    handleClick,
    showDownloadPrompt,
    setShowDownloadPrompt
  };
}