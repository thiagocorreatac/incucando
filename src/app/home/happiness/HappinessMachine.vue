<template>
  <AppContainer>
    <DialogMachine slot="content"/>
  </AppContainer>
</template>
<script>
import AppContainer from './components/appContainer.vue'
import DialogMachine from './components/dialogMachine.vue'
export default {
  name: 'HappinessMachine',
  components: {
    DialogMachine,
    AppContainer
  }
}
</script>
