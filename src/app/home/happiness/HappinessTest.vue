<template>
  <AppContainer>
    <CardTest slot="content" />
  </AppContainer>
</template>

<script>
import AppContainer from './components/appContainer.vue'
import CardTest from './components/cardTest.vue'
export default {
  name: 'HappinessTest',
  components: {
    AppContainer,
    CardTest
  }
}
</script>
