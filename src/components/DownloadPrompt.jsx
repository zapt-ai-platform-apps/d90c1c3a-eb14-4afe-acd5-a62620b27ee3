import React, { useState, useEffect } from 'react';

const DownloadPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const downloaded = localStorage.getItem('appDownloaded');
    if (!downloaded) {
      setShowPrompt(true);
    }
  }, []);

  const handleDownload = () => {
    console.log('Usuário reconheceu o prompt de download');
    localStorage.setItem('appDownloaded', 'true');
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-md">
      <p className="mb-2 text-lg">Baixe o aplicativo para aproveitar todos os recursos!</p>
      <button onClick={handleDownload} className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer">
        Baixar Aplicativo
      </button>
    </div>
  );
};

export default DownloadPrompt;