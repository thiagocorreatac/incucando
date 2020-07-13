<template>
  <v-card class="d-flex flex-column align-center">
    <v-card-title>Melhorador de humor</v-card-title>
    <CircularProgress/>
    <JokeText/>
    <BtnJoke/>
  </v-card>
</template>

<script>
import CircularProgress from './circularProgress.vue'
import JokeText from './jokeText.vue'
import BtnJoke from './form/btnJoke.vue'
export default {
  name: 'CardDialogMachine',
  components: {
    CircularProgress,
    BtnJoke,
    JokeText
  }
}
</script>
