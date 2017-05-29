<template lang="html">
  <div class="">
    <div class="" @click="showModal()">
      显示用户信息
    </div>
    <UserBadModal></UserBadModal>
  </div>
</template>

<script>
import UserBadModal from '@/components/UserBadModal'

export default {
  components: {
      'UserBadModal': UserBadModal,
    },
  methods: {
    showModal() {
      console.log('abc');
      console.log(this.$store);
      this.$store.dispatch("showModalAction", 1)
    }
  }
}
</script>

<style lang="css">
</style>
