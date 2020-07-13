<template>
  <section>
    <h1>Análise: <b>{{emotion.title}}</b></h1>
    <p>{{emotion.description}}</p>
  </section>
</template>

<script>
export default {
  name: 'HappinessInformation',
  computed: {
    emotion () {
      return this.$store.getters.happiness
    }
  }
}
</script>
