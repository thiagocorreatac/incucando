export const setJoke = (state, payload) => {
  state.joke.score++
  state.joke.text = payload.joke
}

export const clearJoke = (state) => {
  state.joke = {
    score: 0,
    text: 'Piadas Geek é cientificamente comprovada como o mais eficiente método de trazer alegria para quem está de cara feia.'
  }
  state.happinessScore = 0
}

export const incrementHapiness = (state) => {
  if (state.happinessScore < 10) state.happinessScore++
}

export const decrementHapiness = (state) => {
  if (state.happinessScore > 0) state.happinessScore--
}
