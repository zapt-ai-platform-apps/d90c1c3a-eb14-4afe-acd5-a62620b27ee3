import React, { useState } from 'react';

const ButtonMagic = ({ onClick }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    console.log('Iniciando animação do botão mágico');
    onClick();
    setTimeout(() => {
      setIsAnimating(false);
      console.log('Animação concluída');
    }, 500);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isAnimating}
      className={`px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg transform transition duration-300 ease-in-out cursor-pointer ${isAnimating ? 'scale-95 opacity-75' : 'hover:scale-105'}`}
    >
      Ganhar Pontos
    </button>
  );
};

export default ButtonMagic;