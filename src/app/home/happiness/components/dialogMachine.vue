<template>
  <v-dialog
    v-model="openDialog"
    :max-width="width"
    persistent
  >
    <CardDialogMachine/>
  </v-dialog>
</template>

<script>
import CardDialogMachine from './cardDialogMachine.vue'
export default {
  name: 'dialogMachine',
  components: {
    CardDialogMachine
  },
  data () {
    return {
      openDialog: true,
      width: 490
    }
  }
}
</script>
