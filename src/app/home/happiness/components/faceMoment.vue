<template>
  <section id="face-moment">
    <v-icon :color="color" v-bind:class="{ 'big-face': big }">{{face}}</v-icon>
  </section>
</template>

<script>
export default {
  name: 'FaceMoment',
  computed: {
    face () {
      return this.$store.getters.happiness.face
    }
  },
  props: {
    color: {
      type: String,
      default: 'black'
    },
    big: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-icon
    font-size 80px
  .big-face
    font-size 140px !important
</style>
