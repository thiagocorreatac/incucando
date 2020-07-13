import { getJoke } from '../services/jokeRequest'

export const getJokeAction = (context) => {
  getJoke()
    .then((response) => context.commit('setJoke', response))
}
