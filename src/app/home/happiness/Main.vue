<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <HelloUser/>
    </v-row>
  </v-container>
</template>

<script>
import HelloUser from './components/helloUser'
export default {
  name: 'Main',
  components: {
    HelloUser
  }
}
</script>
