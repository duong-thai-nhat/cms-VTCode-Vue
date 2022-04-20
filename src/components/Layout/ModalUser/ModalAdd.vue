<template>
  <modal idModal="addModal">
      <template v-slot:header>
          <h5 class="modal-title" id="exampleModalLabel">Thêm mới người dùng</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
      </template>

      <template v-slot:body>
            <div class="pl-5 w-100 row">
                <div class="col-md-6 d-flex row mt-4">
                    <label for="validationDefault01" class="form-label">ID</label>
                    <input type="text" v-model="bindingValueAdd.valueIDInput" class="form-control" id="validationDefault01" required>
                </div>
                <div class="col-md-6 d-flex row mt-4 ml-3">
                    <label for="validationDefault01" class="form-label">Email</label>
                    <input type="text" v-model="bindingValueAdd.valueEmailInput" class="form-control" id="validationDefault01" required>
                </div>
                <div class="col-md-12 row mt-4">
                    <label for="validationDefault01" class="form-label">Username</label>
                    <input type="text" v-model="bindingValueAdd.valueUsernameInput" class="form-control" id="validationDefault01" required>
                </div>
                <div class="col-md-12 row mt-4">
                    <label for="validationDefault01" class="form-label">Password</label>
                    <input type="text" v-model="bindingValueAdd.valuePasswordInput" class="form-control" id="validationDefault01" required>
                </div>
            </div>
          <!-- Select "Tạo" below if you are ready to end your current session. -->
      </template>

      <template v-slot:footer>
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-success" @click="Add" href="#" data-dismiss="modal">Tạo</a>
      </template>

  </modal>
</template>

<script>
import Modal from "../Modal.vue"

export default {
    components: {
        Modal,
    },

    data() {
        return {
            bindingValueAdd: {
                valueIDInput: '',
                valueEmailInput: '',
                valueUsernameInput: '',
                valuePasswordInput: '',
            }
        }
    },

    methods: {
        Add(){
            let data={
                ID: this.bindingValueAdd.valueIDInput,
                Email: this.bindingValueAdd.valueEmailInput,
                Username: this.bindingValueAdd.valueUsernameInput,
                Password: this.bindingValueAdd.valuePasswordInput,
            }
            console.log(this.bindingValueAdd);
            this.$store.dispatch('addUser', data)

            this.bindingValueAdd.valueIDInput = '';
            this.bindingValueAdd.valueEmailInput = '';
            this.bindingValueAdd.valueUsernameInput = '';
            this.bindingValueAdd.valuePasswordInput = '';
        }
    },
}
</script>

<style>

</style>