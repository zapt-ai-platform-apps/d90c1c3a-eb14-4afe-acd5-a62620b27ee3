export async function saveProgress(phase, points) {
  try {
    console.log('Enviando progresso para o backend...');
    const response = await fetch('/api/saveProgress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phase, points })
    });
    if (!response.ok) {
      throw new Error('Falha ao salvar progresso');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro na API saveProgress:', error);
    throw error;
  }
}