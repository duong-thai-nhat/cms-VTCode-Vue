<template>
  <modal idModal="updateModal">
      <template v-slot:header>
          <h5 class="modal-title" id="exampleModalLabel">Sửa bài viết</h5>
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
                <div class="col-md-6 row mt-4 ml-3">
                    <label for="validationDefault01" class="form-label mr-5">Trạng thái</label>
                    <select name="" ref='Status' :value="bindingValue.Status"  id="" class="w-100 select-status form-control">
                        <option value="Đang sử dụng">Đang sử dụng</option>
                        <option value="Chưa sử dụng">Chưa sử dụng</option>
                    </select>
                    <!-- <input type="text" class="form-control" id="validationDefault01" required> -->
                </div>
                <div class="col-md-12 d-flex row mt-4">
                    <label for="validationDefault01" class="form-label">Tên bài viết</label>
                    <input type="text" ref='NamePost' :value="bindingValue.NamePost" class="form-control" id="validationDefault01" required>
                </div>
                <div class="col-md-12 row mt-4">
                    <label for="validationDefault01" class="form-label">Nội dung bài viết</label>
                    <textarea type="text" ref='OverviewPost' :value="bindingValue.OverviewPost" class="form-control" id="validationDefault01" required/>
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
                NamePost: String,
                OverviewPost: String,
                Status: String,
            }
        }
    },

    methods: {
        Edit() {
            this.binding.ID = this.$refs.ID.value;
            this.binding.NamePost = this.$refs.NamePost.value;
            this.binding.OverviewPost = this.$refs.OverviewPost.value;
            this.binding.Status = this.$refs.Status.value;
            console.log(this.binding);

            this.$store.dispatch('editPost', this.binding);
        },
    },
}
</script>

<style>

</style>