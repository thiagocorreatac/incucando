export default function () {
  return {
    happinessScore: 0,
    joke: {
      score: 0,
      text: 'Piadas Geek é cientificamente comprovada como o mais eficiente método de trazer alegria para quem está de cara feia.'
    },
    sentences: {
      saddest: {
        title: 'Extremamente Triste',
        description: 'Nossa, que cara feia, temos o melhor jeito de melhorar seu humor, com piadas Geek, bora começar ?',
        face: 'mdi-emoticon-angry-outline',
        color: 'red'
      },
      sad: {
        title: 'Triste',
        description: 'Continuo triste, quero ficar mais feliz.',
        face: 'mdi-emoticon-sad-outline',
        color: 'orange'
      },
      normal: {
        title: 'Sem emoções',
        description: 'Para mim tanto faz, apenas apague a luz quando sair.',
        face: 'mdi-emoticon-neutral-outline',
        color: 'yellow'
      },
      happy: {
        title: 'Feliz',
        description: 'Ahh, estou me sentindo bem, mais posso ficar melhor.',
        face: 'mdi-emoticon-happy-outline',
        color: 'cyan'
      },
      happier: {
        title: 'Extremamente Feliz',
        description: 'Eu sabia que daria certo, a vida é mais linda quando encontramos a felicidade, agora chega de brincar e vai trabalhar.',
        face: 'mdi-emoticon-cool-outline',
        color: 'blue'
      }
    }
  }
}
