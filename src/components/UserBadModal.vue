<template lang="html">
  <div class="modal" v-show="show">
    <span @click="closeModal()">x</span>
    {{ message }}
    {{ show }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    closeModal() {
      this.$store.dispatch('showModalAction', 0);
    }
  },
  computed: {
    ...mapGetters({
      message: 'message',
      show: 'show'
    })
  }
}
</script>

<style lang="css">
.modal{
  width: 100px;
  height: 100px;
  color: skyblue;
  font-weight: bold;
  border:1px solid yellowgreen;
  background: #e4e4e4;
}
</style>
