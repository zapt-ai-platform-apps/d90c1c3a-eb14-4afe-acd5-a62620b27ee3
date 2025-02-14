export async function saveGameProgress(phase, points) {
  try {
    const response = await fetch('/api/saveProgress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phase, points })
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Falha ao salvar progresso');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro na API de salvar progresso:', error);
    throw error;
  }
}