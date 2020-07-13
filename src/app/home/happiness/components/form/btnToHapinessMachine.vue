<template>
  <section id="to-machine-action" class="mt-10">
    <div class="row">
    <v-btn
      v-if="happinessScore === 10"
      color="black"
      class="yellow--text"
      to="/"
    >
      Chegar de brincar, vou trabalhar
    </v-btn>
    <v-btn
      v-if="happinessScore < 10"
      color="black"
      class="yellow--text"
      to="/machine"
    >
      Quero ficar feliz
    </v-btn>
    </div>
  </section>
</template>
<script>
export default {
  name: 'BtnToHapinessMachine',
  computed: {
    happinessScore () {
      return this.$store.getters.happinessScore
    }
  }
}
</script>
