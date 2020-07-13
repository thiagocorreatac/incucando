<template>
  <section id="hello-user" class="d-flex flex-column align-center" >
    <h1 class="font-weight-black">Felicidade com poucos cliques</h1>
    <p>Existem dias que tudo da errado, mas que bom que me criaram, estou aqui para te fazer rir. <br/> primeiro passo é uma análise de humor, clique no botão abaixo e vamos iniciar.</p>
    <v-icon color="blue face-icon">mdi-emoticon-neutral-outline</v-icon>
    <v-btn class="mt-10" to="/test" outlined color="blue">Quero fazer uma análise</v-btn>
  </section>
</template>

<script>
export default {
  name: 'HelloUser',
  methods: {
    clearJoke () {
      this.$store.commit('clearJoke')
    }
  },
  created () {
    this.clearJoke()
  }
}
</script>

<style lang="stylus" scoped>
  a
    text-decoration none
  .v-icon
    font-size 140px
</style>
