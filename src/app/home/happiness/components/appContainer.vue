<template>
  <v-container
    class="fill-height"
    fluid
    :style="'background-color:' + colorBackground"
  >
    <v-row
      align="center"
      justify="center"
    >
      <slot name="content"/>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AppContainer',
  computed: {
    colorBackground () {
      return this.$store.getters.happiness.color
    }
  }
}
</script>
