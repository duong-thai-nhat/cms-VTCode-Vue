<template>
  <modal idModal="deleteModal">
      <template v-slot:header>
          <h5 class="modal-title" id="exampleModalLabel">Xóa đối tác</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
      </template>

      <template v-slot:body>
          <p class="text-center w-100">Bạn chắc chắn muốn xóa?</p>
      </template>

      <template v-slot:footer>
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-danger" @click="Delete(idDelete)" href="#" data-dismiss="modal">Xóa</a>
      </template>

  </modal>
</template>

<script>
import Modal from "../Modal.vue"
export default {
    components: {
        Modal,
    },

    props:{
        idDelete: Number,
    },

    methods: {
        Delete(id) {
            console.log(id)
            this.$store.dispatch('deleteCustomer', id)
        }
    },
}
</script>

<style>

</style>