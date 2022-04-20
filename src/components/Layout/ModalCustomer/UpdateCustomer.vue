<template>
  <modal idModal="updateModal">
      <template v-slot:header>
          <h5 class="modal-title" id="exampleModalLabel">Sửa đối tác</h5>
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
                    <label for="validationDefault01" class="form-label">Tên khách hàng</label>
                    <input type="text" ref="NameCustomer" :value="bindingValue.NameCustomer" class="form-control" id="validationDefault01" required>
                </div>
                <div class="col-md-6 d-flex row mt-4">
                    <label for="validationDefault01" class="form-label">Tên người đánh giá</label>
                    <input type="text" ref="NameReviewer" :value="bindingValue.NameReviewer" class="form-control" id="validationDefault01" required>
                </div>
                <div class="col-md-6 d-flex row mt-4 ml-3">
                    <label for="validationDefault01" class="form-label">Chức vụ</label>
                    <input type="text" ref="Position" :value="bindingValue.Position" class="form-control" id="validationDefault01" required>
                </div>
                <div class="col-md-12 row mt-4">
                    <label for="validationDefault01" class="form-label">Nội dung bài viết</label>
                    <textarea type="text" ref="Review" :value="bindingValue.Review" class="form-control" id="validationDefault01" required/>
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
        bindingValue: Object,
    },

    data() {
        return {
            binding: {
                ID: String,
                NameCustomer: String,
                NameReviewer: String,
                Position: String,
                Review: String,
            }
        }
    },

    methods: {
        Edit() {
            this.binding.ID = this.$refs.ID.value;
            this.binding.NameCustomer = this.$refs.NameCustomer.value;
            this.binding.NameReviewer = this.$refs.NameReviewer.value;
            this.binding.Position = this.$refs.Position.value;
            this.binding.Review = this.$refs.Review.value;
            console.log(this.binding);

            this.$store.dispatch('editCustomer', this.binding);
        },
    },
}
</script>

<style>

</style>