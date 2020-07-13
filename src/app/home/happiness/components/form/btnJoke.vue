<template>
  <v-card-actions>
    <v-spacer/>

    <v-btn
      v-if="jokeScore && hapinessScore !== 10"
      color="red darken-1"
      text
      @click="hapinessDecrement()"
    >
      Não gostei
    </v-btn>

    <v-btn
      v-if="hapinessScore === 10"
      color="green darken-1"
      text
      to="/test"
    >
      Estou curado e feliz
    </v-btn>

    <v-btn
      v-if="hapinessScore !== 10"
      color="blue darken-2"
      text
      @click="hapinessIncrement()"
    >
      {{labelBtnSubmit}}
    </v-btn>
    <v-spacer/>
  </v-card-actions>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'BtnJoke',
  computed: {
    jokeScore () {
      return this.$store.getters.joke.score
    },
    hapinessScore () {
      return this.$store.getters.happinessScore
    },
    labelBtnSubmit () {
      const jokeScore = this.jokeScore
      switch (jokeScore) {
        case 0:
          return 'Vamos comecar'
        default:
          return 'Gostei dessa'
      }
    }
  },
  methods: {
    ...mapActions(['getJokeAction']),
    hapinessIncrement (increment) {
      if (this.jokeScore > 0) this.$store.commit('incrementHapiness')
      if (this.hapinessScore < 10) this.jokeResquest()
    },
    hapinessDecrement (increment) {
      this.$store.commit('decrementHapiness')
      this.getJokeAction()
    },
    jokeResquest () {
      this.getJokeAction()
    }
  }
}
</script>
