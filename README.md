# Novo App - Jogo Clicker Mágico

Este aplicativo é um jogo clicker onde o usuário clica em um botão mágico para ganhar pontos, progredir por fases e conquistar prêmios. Além disso, o app possui suporte PWA, background music, monitoramento de erros com Sentry e analytics com Umami.

## Jornadas de Usuário

1. [Jogar Clicker](docs/journeys/jogar-clicker.md) - Jogue e avance pelas fases clicando no botão mágico.

## Visão Geral

- O usuário inicia o jogo com 100 segundos no timer.
- Cada clique no botão mágico adiciona 10 pontos se o tempo estiver contando e 9 pontos se o tempo estiver zerado.
- Ao atingir 101 pontos ou mais, um prêmio é exibido e o progresso (fase e pontos) é salvo na base de dados.
- O jogo evolui através de fases (até 100) e, a cada conclusão de fase, o jogo reinicia os valores básicos.
- Um banner de "Baixe o App" é exibido apenas uma vez e pode ser fechado pelo usuário.
- O app inclui background music e um badge fixo "Made on ZAPT" que sempre permanece visível.
- Erros e etapas estratégicas são logados no console e enviados ao Sentry para monitoramento.

Este repositório também inclui documentação de apoio para auxiliar novos usuários a entenderem a jornada do jogo.

## Integrações Externas

- **Sentry:** Monitoramento de erros no frontend e backend.
- **Progressier:** Suporte PWA através de service worker.
- **Umami:** Coleta de analytics de uso.
- **CockroachDB + Drizzle ORM:** Persistência do progresso do jogo.