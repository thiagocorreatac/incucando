<template>
  <v-progress-circular
    :rotate="360"
    :size="110"
    :width="10"
    :value="happinessPercent"
    :color="happinessColor"
  >
    <FaceMoment color="grey"/>
  </v-progress-circular>
</template>

<script>
import FaceMoment from './faceMoment.vue'
export default {
  name: 'CircularProgress',
  components: {
    FaceMoment
  },
  computed: {
    happinessPercent () {
      const multiplyingFactor = 10
      return this.$store.getters.happinessScore * multiplyingFactor
    },
    happinessColor () {
      return this.$store.getters.happiness.color
    }
  }
}
</script>
