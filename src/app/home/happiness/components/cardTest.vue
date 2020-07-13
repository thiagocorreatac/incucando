<template>
  <section id="card-test" class="d-flex flex-column align-center">
    <HappinessInformation/>
    <FaceMoment big/>
    <BtnToHapinessMachine/>
  </section>
</template>

<script>
import HappinessInformation from './happinessInformation.vue'
import BtnToHapinessMachine from './form/btnToHapinessMachine'
import FaceMoment from './faceMoment.vue'
export default {
  name: 'CardTest',
  components: {
    HappinessInformation,
    FaceMoment,
    BtnToHapinessMachine
  }
}
</script>

<style lang="stylus" scoped>
  #card-test
    max-width 350px
</style>
