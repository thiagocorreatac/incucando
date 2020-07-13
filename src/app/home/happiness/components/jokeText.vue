<template>
  <v-card-text class="text-justify font-weight-bold mt-6">
    {{joke}}
  </v-card-text>
</template>

<script>
export default {
  name: 'JokeText',
  computed: {
    joke () {
      return this.$store.getters.joke.text
    }
  }
}
</script>
