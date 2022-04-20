<template>
  <modal idModal="logoutModal">
      <template v-slot:header>
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
      </template>

      <template v-slot:body>
          Select "Logout" below if you are ready to end your current session.
      </template>

      <template v-slot:footer>
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" href="#" data-dismiss="modal">Logout</a>
      </template>

  </modal>
</template>

<script>
import Modal from "../Layout/Modal.vue"
export default {
    components: {
        Modal,
    }
}
</script>

<style>

</style>