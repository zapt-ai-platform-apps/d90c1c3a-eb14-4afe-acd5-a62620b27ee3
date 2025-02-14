# Jornada: Jogar Clicker

Esta jornada guia o usuário através do jogo clicker, desde o início até a progressão de fases e o recebimento de prêmios.

## Passos:

1. **Início do Jogo**
   - Ao abrir o aplicativo, o usuário vê a interface principal que exibe:
     - A fase atual.
     - A pontuação atual.
     - O tempo restante (iniciado em 100 segundos).
     - O botão "Clique Mágico" com animação especial.
     - Um banner sugerindo o download do app (caso não tenha sido fechado anteriormente).

2. **Interação com o Botão**
   - O usuário clica no botão mágico:
     - Enquanto o timer estiver ativo, cada clique adiciona 10 pontos.
     - Se o timer zerar, cada clique adiciona 9 pontos.
     - A cada clique, uma animação mágica é disparada para melhorar a experiência visual.
     
3. **Bônus e Conclusão de Fase**
   - Quando a pontuação atinge ou ultrapassa 101 pontos:
     - Uma mensagem de bônus é exibida: "Parabéns! Você venceu! Prêmio: Serviço ZAPT e bônus: 50 wpoints."
     - O progresso do jogo (fase e pontos) é automaticamente salvo no banco de dados.
     - Após o salvamento, o jogo avança para a próxima fase, reiniciando a pontuação e o timer.

4. **Download do App**
   - Um banner de "Baixe o App" é exibido abaixo dos controles do jogo.
   - O banner pode ser fechado, e essa ação é lembrada para que o aviso não seja exibido novamente.

5. **Recursos Adicionais**
   - **Background Music:** Uma trilha sonora toca em loop, melhorando a imersão.
   - **Monitoramento:** Logs estratégicos são enviados ao console e erros são capturados pelo Sentry.
   - **Badge:** Um badge "Made on ZAPT" é fixado no canto inferior direito, sempre visível e com link para o site [ZAPT](https://www.zapt.ai).

Siga estes passos para aproveitar ao máximo a experiência do jogo clicker e progredir por suas fases com diversão e desafios crescentes!