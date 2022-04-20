<template>
  <modal idModal="updateModal">
      <template v-slot:header>
          <h5 class="modal-title" id="exampleModalLabel">Sửa dịch vụ</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
      </template>

      <template v-slot:body>
          <div class="pl-5 w-100 row">
                <div class="col-md-6 d-flex row mt-4">
                    <label for="validationDefault01" class="form-label">ID</label>
                    <input type="text" ref="ID" :value="bindingValue.ID" class="form-control" id="validationDefault01" required disabled>
                </div>
                <div class="col-md-6 d-flex row mt-4 ml-3">
                    <label for="validationDefault01" class="form-label">Tên dịch vụ</label>
                    <input type="text" ref='NameService' :value="bindingValue.NameService" class="form-control" id="validationDefault01" required>
                </div>
                <div class="col-md-12 row mt-4">
                    <label for="validationDefault01" class="form-label">Mô tả</label>
                    <textarea type="text" ref='Desc' :value="bindingValue.Desc" class="form-control" id="validationDefault01" required/>
                </div>
            </div>
      </template>

      <template v-slot:footer>
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-warning" @click="Edit" href="#" data-dismiss="modal">Sửa</a>
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
        // idEdit: Number,
        // clickEdit: Boolean,
        bindingValue: Object,
    },

    data() {
        return {
            binding: {
                ID: String,
                NameService: String,
                Desc: String,
            }
        }
    },

    methods: {
        Edit() {
            this.binding.ID = this.$refs.ID.value;
            this.binding.NameService = this.$refs.NameService.value;
            this.binding.Desc = this.$refs.Desc.value;
            console.log(this.binding);

            this.$store.dispatch('editService', this.binding);
        },
    },
}
</script>

<style>

</style>