import React from 'react';

const DownloadPrompt = ({ onDismiss }) => {
  const handleDismiss = () => {
    localStorage.setItem('downloadPromptDismissed', 'true');
    onDismiss();
  };

  return (
    <div className="fixed bottom-20 left-0 right-0 bg-yellow-300 p-4 flex justify-between items-center">
      <span className="text-lg font-medium">Baixe o App</span>
      <button 
        onClick={handleDismiss} 
        className="bg-yellow-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        Fechar
      </button>
    </div>
  );
};

export default DownloadPrompt;