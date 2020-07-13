const happinessName = (happiness) => {
  return happiness < 3 ? 'saddest'
    : happiness < 5 && happiness >= 3 ? 'sad'
      : happiness >= 5 && happiness <= 7 ? 'normal'
        : happiness > 7 && happiness < 10 ? 'happy'
          : 'happier'
}

export const happiness = (state) => {
  return state.sentences[happinessName(state.happinessScore)]
}

export const joke = (state) => {
  return state.joke
}

export const happinessScore = (state) => {
  return state.happinessScore
}
